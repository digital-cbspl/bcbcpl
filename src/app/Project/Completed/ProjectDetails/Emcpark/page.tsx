import Breadcrumb from '@/src/layout/breadCrumb'
import EmcPark from '@/src/Projects/ProjectDetails/emcpark'
import React from 'react'

export default function page() {
  return (
    <>
      <Breadcrumb title={'EMC Park'} path={'EMC Park'} />
      <EmcPark />
    </>
  )
}
