import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { nanoid } from "nanoid";

const Form = () => {
  const [item, setItem] = useState("");
  const [itemsList, setItemsList] = useState([]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!item) return;
    const id = nanoid();
    const objList = [...itemsList, { id, item }];
    saveItem(objList);
    setItemsList(objList);
    setItem("");
  };

  const saveItem = (value) => {
    localStorage.setItem("Items", JSON.stringify(value));
  };

  const loadItem = () => {
    const value = JSON.parse(localStorage.getItem("Items"));
    if (!value) return;
    setItemsList(value);
  };

  const deleteItem = (i) => {
    const newItemList = itemsList.filter((item) => item.id !== i);
    saveItem(newItemList);
    setItemsList(newItemList);
  };

  useEffect(() => {
    loadItem();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <div style={{ display: "flex" }}>
          <input
            type="text"
            name="item"
            id="item"
            value={item}
            className="form-input"
            onChange={handleChange}
          />
          <button className="btn">add item</button>
        </div>
      </form>
      <ListItem list={itemsList} deleteItem={deleteItem} />
    </>
  );
};

export default Form;
