import React from 'react'
import { Navbar } from '../../components/navbar/Navbar'
import { CategorizeQuestion } from '../../components/categorizequestion/CategorizeQuestion'
import { ClozeQuestion } from '../../components/clozequestion/ClozeQuestion'
import { ComprehensionQuestion } from '../../components/comprehensionquestion/ComprehensionQuestion'

export function Question() {
  return (
    <>
    <Navbar/>
    <CategorizeQuestion/>
    <ClozeQuestion/>
    <ComprehensionQuestion/>
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-1 mx-auto">
        <button style={{width:"100px",cursor:"pointer"}}>Submit</button>
        </div>
      </div>
    </div>
    
    </>
    
  )
}

