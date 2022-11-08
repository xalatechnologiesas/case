import { FC, useEffect, useState } from "react";
import IBreed from "../models/IBreed";
import ISelectItem from "../models/ISelectItem";
import CustomSelect from "../shared/CustomSelect";
import BreedsService from "../services/BreedsService";

export const HundeRaseComponent: FC = () => {
  const [items, setItems] = useState<Array<ISelectItem>>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getBreeds();
  }, []);

  const getBreeds = () => {
    setLoading(true);

    BreedsService.getAll()
      .then((response: any) => {
        generateSelectList(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
        setLoading(false);      
      });
  };

  const generateSelectList = (breeds: IBreed[]) => {
    const selectItems: ISelectItem[] = [];

    breeds.map((breed: IBreed) =>
      selectItems.push({
        id: breed.id,
        title: breed.name,
        subTitle: breed.temperament,
        image: breed.image.url,
      })
    );

    setItems(selectItems);
    setLoading(false);
  };

  return (
    <>
      {loading && items.length == 0 ? (
        <div>...Loading .. </div>
      ) : (
        <div className="hundeRaser">
          <p className="component-title">Hundraser</p>
          <CustomSelect items={items} defaultTitle="Velg hunderaser" />
        </div>
      )}
    </>
  );
};
