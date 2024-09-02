import React from 'react'
import Title from './Title'

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section className="py-12 px-4 md:px-8">
      <Title title={title} />
      {children}
    </section>
  )
}

export default Section