import GalleryPage from '@/src/Gallery/gallery'
import Breadcrumb from '@/src/layout/breadCrumb'
import React from 'react'

export default function page() {
  return (
    <>
    <Breadcrumb title={'Gallery'} path={'Gallery'} />
    <GalleryPage />
    </>
  )
}
