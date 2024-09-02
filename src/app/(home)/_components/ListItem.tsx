import React from 'react'
import TitleItem from './TitleItem'

function ListItem({ title, description }: { title: string, description: string }) {
  return (
    <li className="my-2">
      <TitleItem title={title} />
      <p className="text-justify leading-relaxed">{description}</p>
    </li>
  )
}

export default ListItem