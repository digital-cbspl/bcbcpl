import CertificationPage from '@/src/About/certification'
import Breadcrumb from '@/src/layout/breadCrumb'
import React from 'react'

export default function page() {
  return (
    <>
        <Breadcrumb title={'Our Certifications'} path={'Our Certifications'} />
        <CertificationPage />
        </>
  )
}
