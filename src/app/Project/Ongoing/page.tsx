import Breadcrumb from '@/src/layout/breadCrumb'
import OngoingProjects from '@/src/Projects/ongoing'
import ProjectsSection from '@/src/Projects/ongoing'
import React from 'react'

export default function page() {
  return (
    <>
    <Breadcrumb title={'Ongoing Projects'} path={'Ongoing Projects'} />
    <OngoingProjects />
    </>
  )
}
