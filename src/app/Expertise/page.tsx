import ServicesSection from '@/src/About/expertise'
import Breadcrumb from '@/src/layout/breadCrumb'
import React from 'react'

export default function page() {
  return (
    <>
    <Breadcrumb title={'Expertise'} path={'Expertise'} />
    <ServicesSection />
    </>
  )
}
