import { useState } from "react";
import Header from "./components/header/Header";
import FeedbackList from "./components/feedbackList/FeedbackList";
import styles from "./app.module.css";
import { feedbackData } from "./data/feedbackData";

type Props = {};

const App = (props: Props) => {
  const [feedback, setFeedback] = useState(feedbackData);

  const deleteFeedback = (id: number) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.section}>
        <Header />
        <div className={styles.content}>
          <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
        </div>
      </div>
    </div>
  );
};

export default App;
