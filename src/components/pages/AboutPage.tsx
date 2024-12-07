import Heading from '../Heading'
import { Link } from "react-router-dom"

const AboutPage = () => {
  return (
    <div className="rounded-lg bg-[#4169e1] p-5 text-white prose prose-invert prose-xl max-w-none">
      <Heading as="h1" size="md">
        About
      </Heading>
      <p>
      This is a React-based feedback application built to practice React, TypeScript, Tailwind CSS, and Framer Motion skills. The app allows users to view, add, and delete ratings, providing a simple yet interactive user experience.
      </p>
      <h2>Features</h2>
      <ul className="marker:text-white">
        <li className="m-0">View ratings</li>
        <li className="m-0">Add new ratings</li>
        <li className="m-0">Delete existing ratings</li>
        <li className="m-0">Smooth animations with Framer Motion</li>
        <li className="m-0">Responsive design with Tailwind CSS</li>
      </ul>
      <h2>State Management</h2>
      <p>The app uses React's `useState` hook for managing the ratings state, demonstrating basic state management in React with TypeScript.</p>

      <h2>Future Improvements</h2>
      <ul className="marker:text-white">
        <li className="m-0">Add persistent storage (localStorage/backend)</li>
        <li className="m-0">Implement rating editing</li>
        <li className="m-0">Add more robust form validation</li>
        <li className="m-0">Create unit and integration tests</li>
      </ul>

      <Link to="/" className="text-white underline">Back to Home</Link>
    </div>
  )
}

export default AboutPage
