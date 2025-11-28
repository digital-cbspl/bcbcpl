import CrewSection from '@/src/About/crew'
import Breadcrumb from '@/src/layout/breadCrumb'
import React from 'react'

export default function page() {
  return (
    <>
    <Breadcrumb title={'Our Crew'} path={'Our Crew'} />
    <CrewSection />
    </>
  )
}
