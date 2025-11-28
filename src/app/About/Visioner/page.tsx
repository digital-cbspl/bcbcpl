import Visioner from '@/src/About/visioner'
import Breadcrumb from '@/src/layout/breadCrumb'
import React from 'react'

export default function page() {
  return (
    <>
    <Breadcrumb title={'Visioner'} path={'Visioner'} />
    <Visioner />
    </>
  )
}
