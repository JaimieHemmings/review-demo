import Heading from "./Heading"
import { FeedbackType } from "../types/types"

interface FeedbackStatsProps {
  feedback: FeedbackType[]
}

const FeedbackStats: React.FC<FeedbackStatsProps> = ({ feedback }) => {
  // Calculate the average rating
  let averageRating = feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length
  const fixedAverageRating = averageRating.toFixed(1).replace(/\.0$/, '')

  return (
    <div className="feedback-stats py-6">
      <Heading as="h2" size="sm">
        {feedback.length} Reviews
      </Heading>
      <Heading as="h3" size="xs">
        Average Rating: {isNaN(averageRating) ? 0 : fixedAverageRating}
      </Heading>
    </div>
  )
}

export default FeedbackStats