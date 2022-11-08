import { FC, useState } from "react";
import ISelectItem from "../../models/ISelectItem";
import ISelectProps from "../../models/ISelectProps";

import "./CustomSelect.css";

export const CustomSelect: FC<ISelectProps> = ({ items, defaultTitle }) => {
  const [open, setOpen] = useState(false);

  const defaultSelected: ISelectItem = {
    title: defaultTitle,
    subTitle: "",
    image: ""
  }

  const [selected, setSelected] = useState<ISelectItem>(defaultSelected);

  const onOpen = () => {
    setOpen((isOpen) => !isOpen);
  };

  const onSelect = (item: ISelectItem) => {
    setSelected(item);
    setOpen((isOpen) => !isOpen);
  };

  return (
    <div className="dropdown">
      <div className={open ? "dropdown-btn selected" : "dropdown-btn"}  
            onClick={onOpen}>
        {
        selected && selected.image ? <img className="image" src={selected.image} alt="" /> : ""
        }
        <div className="title">{selected.title}</div>
        <img className="arrow" src="./assets/arrow_down.png" alt="" />
      </div>
      <div className="dropdown-content">
      { open &&
        items.map((item: ISelectItem) => {
          const { title, subTitle, image } = item;
          return (
              <div 
                  className={selected.id == item.id ? "dropdown-item selected" : "dropdown-item"} 
                  onClick={() => onSelect(item)} key={item.id}>
                <img className="image" src={image} alt="" />
                <div className="captions">
                  <div className="title">{title}</div>
                  <div className="subTitle">{subTitle}</div>
                </div>
              </div>
          );
        })}
      </div>
      </div>
  );
};

export default CustomSelect;
