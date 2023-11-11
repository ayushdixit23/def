import React from 'react'
import dynamic from 'next/dynamic'

const DynamicComponentWithNoSSR = dynamic(
  () => import('./components/Bodys'),
  { ssr: false }
)

export default function Home() {
  return (
    <div>
      <DynamicComponentWithNoSSR />
    </div>
  )
}
