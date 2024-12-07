import { useState } from "react"
import Card from "./shared/Card"
import Heading from "./Heading"

const FeedbackForm = () => {

  const [feedbacktext, setFeedbackText] = useState('')

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeedbackText(e.target.value)
  }

  return (
    <div className="bg-[#4169e1] my-6 p-5 rounded-lg">
      <Card>
        <Heading as="h2" size="sm">
          Leave feedback
        </Heading>
        <form>
          <Heading as="h3" size="xs">
            How would you rate your service with us?
          </Heading>

          <div className="input-group mt-3">
            <input
              className="input p-5 text-xl text-black w-full my-3 placeholder-gray-500 border-slate-400 border-2"
              onChange={handleTextChange}
              type="text"
              placeholder="Write a review"
              value={feedbacktext}
              />
            <button type="submit">Submit</button>
          </div>
        </form>
      </Card>
    </div>
  )
}

export default FeedbackForm
