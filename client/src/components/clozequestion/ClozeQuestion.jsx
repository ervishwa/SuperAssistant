import React from 'react'

export function ClozeQuestion() {
  return (
    <div className="container-fluid mt-5">
        <div className="row">
            <div className="col-md-12">
                <h3> Type - 2 <span style={{color:"red"}}>Fill the coorect ans please.</span></h3>
                <div className="row">
                    <div className="col-md-8 flex">
                        <div className='text-center' style={{width:"120px",border:"1px solid black",backgroundColor:"green",borderRadius:"7px"}}>Single Threaded</div>
                        <div className='text-center' style={{width:"120px",border:"1px solid black",backgroundColor:"green",borderRadius:"7px"}}>MultiThreaded</div>
                        <div className='text-center' style={{width:"120px",border:"1px solid black",backgroundColor:"green",borderRadius:"7px"}}>Losse</div>
                        <div className='text-center' style={{width:"120px",border:"1px solid black",backgroundColor:"green",borderRadius:"7px"}}>Strict</div>
                    </div>
                </div>

                <div className="row mt-5">
                    <div className="col-md-12">
                        <h3>JavaScript is a _____________ languaga and also ______________ type language.</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

