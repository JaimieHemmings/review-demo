import React, { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  reverse?: boolean
}

const Card: React.FC<CardProps> = ({ children, reverse = false }) => {
  return (
    <div className={`card py-2 ${reverse ? 'reverse' : ''}`}>
      {children}
    </div>
  )
}

export default Card