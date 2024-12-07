import { useState } from 'react'

interface RatingSelectProps {
  select: (rating: number) => void
}

const RatingSelect: React.FC<RatingSelectProps> = ({ select }) => {
  const [selected, setSelected] = useState<number>(10)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(+e.target.value)
    select(+e.target.value)
  }

  return (
    <ul className="flex flex-row justify-around gap-2 rating">
      {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
        <li key={i}>
          <input
            type="radio"
            id={`num${i}`}
            name="rating"
            value={i}
            onChange={handleChange}
            checked={selected === i}
          />
          <label htmlFor={`num${i}`}>{i}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect
