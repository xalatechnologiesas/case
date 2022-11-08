import { FC, useEffect, useState } from "react";
import IBreed from "../models/IBreed";
import ISelectItem from "../models/ISelectItem";
import CustomSelect from "../shared/CustomSelect";
import BreedsService from "../services/BreedsService";

export const HundeRaseComponent: FC = () => {
  const [breeds, setBreeds] = useState<Array<IBreed>>([]);
  const [items, setItems] = useState<Array<ISelectItem>>([]);

  useEffect(() => {
    getBreeds();
  });

  const getBreeds = () => {
    BreedsService.getAll()
      .then((response: any) => {
        setBreeds(response.data);
        console.log(response.data);

        generateSelectList();
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  const generateSelectList = () => {
    const selectItems: ISelectItem[] = [];

    breeds.map((breed: IBreed) =>
      selectItems.push({
        title: breed.name,
        subTitle: breed.temperament,
        image: breed.image.url,
      })
    );

    setItems(selectItems);
  };

  return (
    <div className="hundeRaser">
      <p className="component-title">Hundraser</p>
      <CustomSelect items={items} defaultTitle="Velg hunderaser" />
    </div>
  );
};
