import { useEffect, useState } from "react";

type Item = {
  name: string;
  img: string;
};
const items: Item[] = [
  {
    name: "phone",
    img: "https://images.unsplash.com/photo-1519223400710-6da9e1b777ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "car",
    img: "https://images.unsplash.com/photo-1517676109075-9a94d44145d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyfGVufDB8fDB8fHwy",
  },
  {
    name: "keyboard",
    img: "https://images.unsplash.com/photo-1712396901531-605f06a423aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2V5Ym9hcmQlMjBtZWNoYW5pY2FsfGVufDB8fDB8fHwy",
  },
  {
    name: "mouse",
    img: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export const ProjectThirteen = () => {
  const [input, setInput] = useState<string>("");
  const [itemToReturn, setItemToReturn] = useState<Item>({ name: "", img: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.currentTarget.value);
    // console.log(input);
    items.map((item) => {
      item.name.includes(input) && setItemToReturn(item);
    });
  };

  return (
    <div className="search">
      <h2>We have keyboard,mouse,car and phone</h2>
      <input
        type="text"
        className="search__input"
        value={input}
        placeholder=" What are you looking for?"
        onChange={handleInputChange}
      />
      <div className="search-result">
        <img className="search-result__img" src={itemToReturn.img} alt="" />
      </div>
    </div>
  );
};
