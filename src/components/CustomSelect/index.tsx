import { FC, useState } from "react";
import { ISelectItem } from "../../models/ISelectItem";
import { ISelectProps } from "../../models/ISelectProps";

import "./CustomSelect.css";

export const CustomSelect: FC<ISelectProps> = ({ items, defaultTitle }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen((isOpen) => !isOpen);
  };

  const onSelect = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={onOpen}>
        {defaultTitle}
        <img className="arrow" src="./assets/arrow_down.png" alt="" />
      </div>
      <div className="dropdown-content">
      { open &&
        items.map((item: ISelectItem) => {
          const { title, subTitle, image } = item;
          return (
              <div className="dropdown-item" onClick={onSelect}>
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
