import { FC } from "react";
import styles from "./feedbackItem.module.css";

type Props = {
  item: {
    id: number;
    rating: number;
    text: string;
  };
  handleDelete: (id: number) => void;
};

const FeedbackItem: FC<Props> = ({ item, handleDelete }) => {
  return (
    <div className={styles.card}>
      <div className={styles.num_display}>{item.rating}</div>
      <button className={styles.close} onClick={() => handleDelete(item.id)}>
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="purple"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
        </svg>
      </button>
      <p className={styles.text_display}>{item.text}</p>
    </div>
  );
};

export default FeedbackItem;
