import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from "./FeedbackItem"
import { FeedbackType } from "../types/types"
import FeedbackStats from "./FeedbackStats"

interface FeedbackListProps {
  feedback: FeedbackType[],
  handleDelete: (id: number) => void
}

const FeedbackList: React.FC<FeedbackListProps> = ({ feedback, handleDelete }) => {
  if (!feedback || feedback.length === 0) {
    return <p className="text-white text-xl font-bold">No feedback yet</p>
  }

  return (
    <div className="feedback-list my-6 bg-[#4169e1] p-5 rounded-lg">
      <FeedbackStats feedback={ feedback } />
      <AnimatePresence
        initial={false}
        mode='popLayout'
      >
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
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
  )
}

export default FeedbackList