import EquipmentSection from '@/src/About/equipment '
import Breadcrumb from '@/src/layout/breadCrumb'
import React from 'react'

export default function page() {
  return (
    <>
    <Breadcrumb title={'Equipment & Machinery'} path={'Equipment & Machinery'} />
    <EquipmentSection />
    </>
  )
}
