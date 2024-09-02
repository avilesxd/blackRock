import React from 'react'

function Title({ title }: { title: string }) {
  return (
    <h1 className="text-center mb-8 text-3xl font-bold">{title}</h1>
  )
}

export default Title