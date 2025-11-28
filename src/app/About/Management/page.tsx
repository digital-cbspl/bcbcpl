import TeamSection from '@/src/About/team'
import Breadcrumb from '@/src/layout/breadCrumb'
import React from 'react'

export default function page() {
  return (
    <>
    <Breadcrumb title={'Management'} path={'Management'} />
    <TeamSection />
    </>
  )
}
