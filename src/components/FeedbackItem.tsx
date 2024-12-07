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
      <div className="card relative" data-key={item.id}>
        <div
          className="num-display absolute -top-2 -left-2 w-12 h-12 flex items-center justify-center bg-pink-500 rounded-full text-xl text-white drop-shadow-lg align-middle font-bold">
          { item.rating }
        </div>
        <button className="close absolute top-0 right-0 p-2 rounded-full font-bold text-2xl opacity-50 hover:opacity-100 transition-all" onClick={() => handleDelete(item.id)}>
          <FaTimes color="red" />
        </button>
        <div className="text-display py-8 bg-white rounded-lg p-10 text-lg leading-6">
          { item.text }
        </div>
      </div>
    </Card>
  )
}

export default FeedbackItem
