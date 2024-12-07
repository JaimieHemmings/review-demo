import React, { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  version?: 'primary' | 'secondary' | 'tertiary'
  type?: 'button' | 'submit' | 'reset'
  isDisabled?: boolean
}

const Button: React.FC<ButtonProps> = (
  {
    children,
    version = 'primary',
    type = 'button',
    isDisabled = false
  }) => {
  return (
    <div className="flex flex-row justify-end w-full mt-3">
      <button
        type={type}
        disabled={isDisabled}
        className={`btn btn-${version} text-lg ${isDisabled&&'cursor-not-allowed opacity-50'}`}
      >
        {children}
      </button>
    </div>
  )
}

export default Button