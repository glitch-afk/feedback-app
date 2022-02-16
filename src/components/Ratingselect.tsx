import { useState } from "react";

type Props = {
  select: (num: number) => void;
};

const Ratingselect = ({ select }: Props) => {
  const [selected, setSelected] = useState(5);

  const handleChange = (e: any) => {
    setSelected(+e.target.value);
    select(+e.target.value);
  };

  return (
    <>
      <ul className="flex w-full items-center justify-around ">
        <li>
          <input
            type="radio"
            id="num1"
            name="rating"
            value="1"
            onChange={handleChange}
            checked={selected === 1}
          />
          <label htmlFor="num1">1</label>
        </li>
        <li>
          <input
            type="radio"
            id="num2"
            name="rating"
            value="2"
            onChange={handleChange}
            checked={selected === 2}
          />
          <label htmlFor="num2">2</label>
        </li>
        <li>
          <input
            type="radio"
            id="num3"
            name="rating"
            value="3"
            onChange={handleChange}
            checked={selected === 3}
          />
          <label htmlFor="num3">3</label>
        </li>
        <li>
          <input
            type="radio"
            id="num4"
            name="rating"
            value="4"
            onChange={handleChange}
            checked={selected === 4}
          />
          <label htmlFor="num4">4</label>
        </li>
        <li>
          <input
            type="radio"
            id="num5"
            value="5"
            name="rating"
            onChange={handleChange}
            checked={selected === 5}
          />
          <label htmlFor="num5">5</label>
        </li>
      </ul>
    </>
  );
};

export default Ratingselect;
