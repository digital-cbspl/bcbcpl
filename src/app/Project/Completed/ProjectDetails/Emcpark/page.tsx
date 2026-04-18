import Breadcrumb from '@/src/layout/breadCrumb'
import EmcPark from '@/src/Projects/ProjectDetails/emcpark'
import React from 'react'

export default function page() {
  return (
    <>
      <Breadcrumb title={'EMC _Park'} path={'EMC _Park'} />
      <EmcPark />
    </>
  )
}
