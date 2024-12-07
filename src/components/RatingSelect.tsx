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
    <ul className="flex flex-row justify-around gap-2 rating py-3">
      {Array.from({ length: 10 }, (_, i) => i + 1).map((i) => (
        <li
          key={i}
          className={`relative w-[50px] h-[50px] rounded-full flex items-center justify-center text-white text-xl drop-shadow-lg align-middle ${selected === i ? 'bg-pink-600' : 'bg-[#6488EA]'}`}
        >
          <input
            className={`absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-[50px] h-[50px] rounded-full cursor-pointer p-[10px] border-none opacity-0`}
            type="radio"
            id={`num${i}`}
            name="rating"
            value={i}
            onChange={handleChange}
            checked={selected === i}
          />
          <label className="font-bold" htmlFor={`num${i}`}>{i}</label>
        </li>
      ))}
    </ul>
  )
}

export default RatingSelect
