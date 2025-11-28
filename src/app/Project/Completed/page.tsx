import Breadcrumb from '@/src/layout/breadCrumb'
import CompletedProjects from '@/src/Projects/completed'
import React from 'react'

export default function page() {
  return (
    <>
    <Breadcrumb title={'Completed Projects'} path={'Completed Projects'} />
    <CompletedProjects />
    </>
  )
}
