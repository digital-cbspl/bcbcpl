import CareerPage from '@/src/Career/career'
import Breadcrumb from '@/src/layout/breadCrumb'
import React from 'react'

export default function page() {
  return (
    <>
    <Breadcrumb title={'Career'} path={'Career'} />
    <CareerPage />
    </>
  )
}
