import { FC } from "react";
import styles from "./feedbacklist.module.css";
import FeedbackItem from "../feedbackItem/FeedbackItem";

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
    <div className={styles.feedback_list}>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default FeedbackList;
