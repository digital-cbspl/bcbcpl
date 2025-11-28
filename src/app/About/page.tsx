import InfoSection from '@/src/About/info'
import Legacy from '@/src/About/legacy'
import AboutPage from '@/src/About/moreAbout'
import TeamSection from '@/src/About/team'
import Breadcrumb from '@/src/layout/breadCrumb'
import React from 'react'

export default function page() {
  return (
    <>
   
    <Breadcrumb title={'About Us'} path={'About Us'} />
     <AboutPage />
     <Legacy />
    <InfoSection />
    </>
  )
}
