import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './shared/Card'
import { FeedbackType } from '../types/types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

interface FeedbackItemProps {
  item: FeedbackType
}

const FeedbackItem: React.FC<FeedbackItemProps> = ({ item }) => {
  const { deleteFeedback, editFeedback }: any = useContext(FeedbackContext)

  return (
    <Card>
      <div className="card relative" data-key={item.id}>
        <div
          className="num-display absolute -top-2 -left-2 w-12 h-12 flex items-center justify-center bg-pink-500 rounded-full text-xl text-white drop-shadow-lg align-middle font-bold">
          {item.rating}
        </div>
        <div className="flex flex-row justify-end gap-2 absolute top-0 right-0 p-2 align-middle">
          <button
            className="edit rounded-full font-bold text-2xl opacity-50 hover:opacity-100 transition-all align-middle"
            onClick={() => editFeedback(item.id)}
          >
            <FaEdit color="green" />
          </button>
          <button
            className="close rounded-full font-bold text-2xl opacity-50 hover:opacity-100 transition-all  align-middle"
            onClick={() => deleteFeedback(item.id)}
          >
            <FaTimes color="red" />
          </button>
        </div>
        <div className="text-display py-8 bg-white rounded-lg p-10 text-lg leading-6">
          {item.text}
        </div>
      </div>
    </Card>
  )
}

export default FeedbackItem
