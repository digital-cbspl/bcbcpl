import Breadcrumb from '@/src/layout/breadCrumb'
import AluminiumPark from '@/src/Projects/ProjectDetails/aluminium-park'
import React from 'react'

export default function page() {
  return (
    <>
      <Breadcrumb title={'Aluminium Park'} path={'Aluminium Park'} />
      <AluminiumPark />
    </>
  )
}
