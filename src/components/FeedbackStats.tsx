interface Ifeedback {
  id: number;
  rating: number;
  text: string;
}

type Props = {
  feedback: Ifeedback[];
};

const FeedbackStats = ({ feedback }: Props) => {
  // calculate ratings average
  let avg =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  return (
    <div className="flex pb-10 justify-between w-3/6">
      <h4 className="text-xl text-[silver] font-bold">
        {feedback.length} Reviews
      </h4>
      <h4 className="text-xl text-[silver] font-bold">
        Average rating: {isNaN(avg) ? 0 : avg.toFixed(1)}
      </h4>
    </div>
  );
};

export default FeedbackStats;
