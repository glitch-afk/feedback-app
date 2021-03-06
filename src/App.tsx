import { useState } from "react";
import styles from "./app.module.css";
import { feedbackData } from "./data/feedbackData";
import {
  Header,
  FeedbackForm,
  FeedbackStats,
  FeedbackList,
} from "./components";

import { v4 as uuidv4 } from "uuid";

type Props = {};

const App = (props: Props) => {
  const [feedback, setFeedback] = useState(feedbackData);

  const deleteFeedback = (id: number) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback: any) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <Header />
        <div className={styles.content}>
          <FeedbackForm handleAdd={addFeedback} />
          <FeedbackStats feedback={feedback} />
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
      </div>
    </div>
  );
};

export default App;
