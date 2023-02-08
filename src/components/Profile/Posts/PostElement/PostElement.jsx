import React from "react";
import s from "./PostElement.module.css";

const PostElement = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://img.freepik.com/vecteurs-libre/avion-volant-dans-monde-entier_1284-42938.jpg?w=2000"
        alt=""
      />
      {props.message}

      <div>Like {props.like}</div>
    </div>
  );
};

export default PostElement;
