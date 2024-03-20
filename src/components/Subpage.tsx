import React from 'react'
import '../assets/styles/components/Subpage.css'

// Define an interface for the component's props
interface SubpageProps {
  title: string
  content: string
}

// Apply the interface to your component's props
const Subpage: React.FC<SubpageProps> = ({ title, content }) => {
  return (
    <div className="subpage-container">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Subpage
