import React from "react";
import { nanoid } from "nanoid";
import SingleItem from "./SingleItem";

const ListItem = ({ list, deleteItem }) => {
  return (
    <div className="items">
      {list.map((a) => {
        const { id, item } = a;

        return (
          <SingleItem key={id} item={item} deleteItem={() => deleteItem(id)} />
        );
      })}
    </div>
  );
};

export default ListItem;
