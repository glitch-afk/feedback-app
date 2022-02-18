import { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
// <div className="flex flex-col">
//   {feedback.map((item) => (
//     <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
//   ))}
// </div>

export default FeedbackList;
