import React, { useEffect, useState } from "react";
import { addToLocalStorage } from "../../../../redux/slice/address";
import { useAppDispatch } from "../../../../redux/hooks";

const Constructor = () => {
  const [data, setData] = useState<any>({
    title: "",
    address: "",
    phoneNumber: "",
  });

  const dispatch = useAppDispatch();

  const handleChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addToLocalStorage(data));
    setData({
      title: "",
      address: "",
      phoneNumber: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleChangeData}
          placeholder="title"
        />
        <input
          type="text"
          name="address"
          value={data.address}
          onChange={handleChangeData}
          placeholder="address"
        />
        <input
          type="number"
          name="phoneNumber"
          value={data.phoneNumber}
          onChange={handleChangeData}
          placeholder="Number"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Constructor;
