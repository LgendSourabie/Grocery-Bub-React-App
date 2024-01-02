import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";

const Form = () => {
  const [item, setItem] = useState("");
  const [itemsList, setItemsList] = useState([]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (!item) return;
      const id = nanoid();
      const objList = [...itemsList, { id, item }];
      saveItem(objList);
      setItemsList(objList);
      toast.success("awesome");
    } catch (err) {
      toast.error("error message");
    }
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
    try {
      saveItem(newItemList);
      setItemsList(newItemList);
      toast.success("awesome");
    } catch (err) {
      toast.error("error message");
    }
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
      <ToastContainer position="top-center" />
    </>
  );
};

export default Form;
