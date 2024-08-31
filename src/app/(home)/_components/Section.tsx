import React from 'react'

function Section({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <section className="py-12 px-4 md:px-8">
      <h1 className="text-center mb-8 text-3xl font-bold">{title}</h1>
      {children}
    </section>
  )
}

export default Section