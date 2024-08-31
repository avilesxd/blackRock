import React from 'react'

function ListItem({ title, description }: { title: string, description: string }) {
  return (
    <li className="my-2">
      <h2 className="font-semibold underline">{title}</h2>
      <p className="text-justify leading-relaxed">{description}</p>
    </li>
  )
}

export default ListItem