import React from "react";
import "./PostItem.scss";

interface IPostItemProps {
  img: string;
}

const PostItem = ({ img }: IPostItemProps) => {
  return (
    <div className="PostItem">
      <div className="PostItem__title">Lorem ipsum dolor sit amet</div>
      <div className="PostItem__content">
        <div className="PostItem__img">
          <img src={img} />
        </div>
        <div className="PostItem__desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
          sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
          accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
          massa in metus bibendum congue. Pellentesque ultrices liquam egestas
          nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales
          est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam
          porta massa in metus bibendum congue. Pellentesque ultrices vestibulum
          mattis.
        </div>
      </div>
      {/* <div className="PostItem__desc-more">
        ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est
        ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta
        massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
      </div> */}
    </div>
  );
};

export default PostItem;
