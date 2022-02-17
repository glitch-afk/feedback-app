import React, { useState } from "react";
import Button from "./Button";
import RatingSelect from "./Ratingselect";

type Props = {
  handleAdd: ({}) => void;
};

const FeedbackForm = ({ handleAdd }: Props) => {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [msg, setMsg] = useState<string | null>(null);
  const [rating, setRating] = useState(3);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (text === "") {
      setBtnDisabled(true);
      setMsg(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMsg("Text must be atleast 10 characters or more");
    } else {
      setMsg(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };
      handleAdd(newFeedback);
      setText("");
    }
  };

  return (
    <div className="bg-gray-800 bg-opacity-40 rounded mb-10 py-4 px-4 w-11/12 md:w-4/6 xl:w-3/6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center w-full"
      >
        <h2 className="text-2xl font-bold text-purple-600 mb-6">
          Please leave a feedback
        </h2>
        {/* @todo - rating select component */}
        <RatingSelect select={(rating: number) => setRating(rating)} />
        <div className="flex flex-col md:flex-row space-y-2 md:space-x-5 md:space-y-0 w-full justify-center">
          <input
            className="border border-gray-400 rounded px-2 py-1 text-sm text-white w-full md:w-3/4 bg-transparent"
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {msg && (
          <div className="text-gray-400 text-xs text-center select-none pt-2">
            {msg}
          </div>
        )}
      </form>
    </div>
  );
};

export default FeedbackForm;
