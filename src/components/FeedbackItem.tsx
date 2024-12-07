import { FaTimes } from 'react-icons/fa'
import Card from './shared/Card'
import { FeedbackType } from '../types/types'

interface FeedbackItemProps {
  item: FeedbackType,
  handleDelete: (id: number) => void
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({ item, handleDelete }) => {
  return (
    <Card>
      <div className="card relative">
        <div className="num-display absolute top-0 left-0 translate-x-[-25%] translate-y-[-25%] p-2 bg-[#4169e1] rounded-full text-xl text-white flex items-center justify-center">
          { item.rating }
        </div>
        <button className="close absolute top-0 right-0 p-5" onClick={() => handleDelete(item.id)}>
          <FaTimes color="purple" />
        </button>
        <div className="text-display py-8 bg-white rounded-lg p-5 text-lg leading-6">
          { item.text }
        </div>
      </div>
    </Card>
  )
}

export default FeedbackItem
