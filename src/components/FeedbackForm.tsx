import { useState, useContext, useEffect } from "react"
import Card from "./shared/Card"
import Heading from "./Heading"
import Button from "./Button"
import RatingSelect from "./RatingSelect"
import { FeedbackType } from "../types/types"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackForm: React.FC = () => {

  const [feedbackText, setFeedbackText] = useState('')
  const [feedbackRating, setFeedbackRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  const{ addFeedback, feedbackEdit, updateFeedback }: any = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit) {
      setBtnDisabled(false)
      setFeedbackText(feedbackEdit.item.text)
      setFeedbackRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    if (value.length === 0) {
      setBtnDisabled(true)
      setErrorMessage('')
    } else if (value !== '' && value.trim().length <= 10) {
      setBtnDisabled(true)
      setErrorMessage('Feedback must be at least 10 characters long')
    } else {
      setBtnDisabled(false)
      setErrorMessage('')
    }

    setFeedbackText(value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (feedbackText.trim().length < 10) {
      setErrorMessage('Feedback must be at least 10 characters long')
      return
    }

    const newFeedback: FeedbackType = {
      id: Date.now(),
      rating: feedbackRating,
      text: feedbackText,
    }

    feedbackEdit.edit ? (
      updateFeedback(feedbackEdit.item.id, newFeedback)
    ) : (
      addFeedback(newFeedback)
    )

    setFeedbackText('')
    setBtnDisabled(true)
  }

  return (
    <section className="bg-[#4169e1] my-6 p-5 rounded-lg">
      <Card>
        <Heading as="h2" size="sm">
          Leave feedback
        </Heading>
        <form onSubmit={handleSubmit}>
          <Heading as="h3" size="xs">
            How would you rate your service with us?
          </Heading>

          <div className="input-group mt-3">
            <RatingSelect select={(rating) => setFeedbackRating(rating)} />
            <input
              className="input border-none rounded-lg p-5 text-xl text-black w-full my-3 placeholder-gray-500 border-slate-400 border-2"
              onChange={handleTextChange}
              type="text"
              placeholder="Write a review"
              value={feedbackText}
              />
            <Button type="submit" isDisabled={btnDisabled}>
              Submit
            </Button>
          </div>

          {errorMessage && (
            <div className="text-slate-900 text-xl message bg-white mt-5 p-3 border-2 border-red-500 rounded-lg">
              {errorMessage}
            </div>
          )}

        </form>
      </Card>
    </section>
  )
}

export default FeedbackForm
