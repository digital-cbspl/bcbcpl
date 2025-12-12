import Breadcrumb from '@/src/layout/breadCrumb'
import KalingaStudio from '@/src/Projects/ProjectDetails/kalinga-studio'
import React from 'react'

export default function page() {
  return (
    <>
      <Breadcrumb title={'Redevelopment of Kalinga Studio'} path={'Redevelopment of Kalinga Studio'} />
      <KalingaStudio />
    </>
  )
}
