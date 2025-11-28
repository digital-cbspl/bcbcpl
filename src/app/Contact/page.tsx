import ContactSection from '@/src/components/contact'
import Map from '@/src/components/map'
import Breadcrumb from '@/src/layout/breadCrumb'
import React from 'react'

export default function page() {
  return (
    <>
    <Breadcrumb title={'Contact Us'} path={'Contact Us'} />
    <ContactSection />
    <Map />
    </>
  )
}
