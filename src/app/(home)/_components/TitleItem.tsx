import React from 'react'

function TitleItem({ title }: { title: string }) {
  return (
    <h2 className="font-semibold underline">{title}</h2>
  )
}

export default TitleItem