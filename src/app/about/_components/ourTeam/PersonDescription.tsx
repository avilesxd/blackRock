import React from 'react'

function PersonDescription({ description }: { description: string }) {
  return (
    <p className='text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed text-justify'>{description}</p>
  )
}

export default PersonDescription