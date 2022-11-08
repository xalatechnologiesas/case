import { FC, useState } from "react";
import { ISelectItem } from "../../models/ISelectItem";
import { ISelectProps } from "../../models/ISelectProps";

import "./CustomSelect.css";

export const CustomSelect: FC<ISelectProps> = ({ items, defaultTitle }) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => {
    setOpen((isOpen) => !isOpen);
  };

  return (
    <div className="wrapper">
      <div className="dropDown" onClick={onOpen}>
        {defaultTitle}
      </div>
      {open &&
        items.map((item: ISelectItem) => {
          const { title, subTitle, image } = item;
          return (
            <div className="content">
              <div className="item">
                <img className="image" src={image} alt="" />
                <div className="captions">
                  <div className="title">{title}</div>
                  <div className="subTitle">{subTitle}</div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CustomSelect;
