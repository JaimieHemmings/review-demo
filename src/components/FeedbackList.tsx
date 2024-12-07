import FeedbackItem from "./FeedbackItem"
import { FeedbackType } from "../types/types"
import FeedbackStats from "./FeedbackStats"

interface FeedbackListProps {
  feedback: FeedbackType[],
  handleDelete: (id: number) => void
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p>No feedback yet</p>
  }

  return (
    <div className="feedback-list my-6 bg-[#4169e1] p-5 rounded-lg">
      <FeedbackStats feedback={ feedback } />
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  )
}

export default FeedbackList