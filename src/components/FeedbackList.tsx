import { FC } from "react";
import FeedbackItem from "./feedbackItem/FeedbackItem";

interface Ifeedback {
  id: number;
  rating: number;
  text: string;
}

type Props = {
  feedback: Ifeedback[];
  handleDelete: (id: number) => void;
};

const FeedbackList: FC<Props> = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No Feedbacks Yet!</p>;
  }

  return (
    <div className="flex flex-col">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default FeedbackList;
