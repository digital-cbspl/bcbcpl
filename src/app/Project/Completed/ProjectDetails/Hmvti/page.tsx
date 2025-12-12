import Breadcrumb from '@/src/layout/breadCrumb'
import Hmvti from '@/src/Projects/ProjectDetails/hmvti'
import React from 'react'

export default function page() {
  return (
    <>
      <Breadcrumb title={'HMVTI'} path={'HMVTI'} />
      <Hmvti />
    </>
  )
}
