import Breadcrumb from '@/src/layout/breadCrumb'
import DhhBhadrak from '@/src/Projects/ProjectDetails/dhh-bhadrak'
import React from 'react'

export default function page() {
  return (
    <>
      <Breadcrumb title={'DHHBhadrak'} path={'DHHBhadrak'} />
      <DhhBhadrak />
    </>
  )
}
