import React, { useState } from "react";

const SingleItem = ({ item, deleteItem }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setChecked(!checked);
  };
  //   console.log(checked);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        name="checked"
        value={checked}
        onChange={handleChange}
      />
      <p style={{ textDecoration: checked ? "line-through" : "unset" }}>
        {item}
      </p>
      <button className="btn remove-btn" onClick={deleteItem}>
        delete
      </button>
    </div>
  );
};

export default SingleItem;
