import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { CategorizeForm } from '../../components/catogerizeform/CategorizeForm'
import { ClozeForm } from '../../components/clozeForm/ClozeForm'
import { ComprehensionForm } from '../../components/comprehensionForm/ComprehensionForm'

export function Home() {
  return (
    <>
    <Navbar/>
    <CategorizeForm/>
    <ClozeForm/>
    <ComprehensionForm/>
    </>
  )
}

