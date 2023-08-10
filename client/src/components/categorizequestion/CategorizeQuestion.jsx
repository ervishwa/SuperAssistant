import "./categorizeQuestion.css";
export function CategorizeQuestion() {
  return (
    <div className="container-fluid">
      <div className="row">
      <div className="col-md-8">
         <h2>Question 1 : <span style={{color:"red"}}>which is country and which is a city?</span></h2>
         <div className="row">
          <div className="col-md-12 flex">
            <div className="text-center" style={{width:"100px",border:"1px solid black",backgroundColor:"green",borderRadius:"7px"}}>New York</div>
            <div className="text-center" style={{width:"100px",border:"1px solid black",backgroundColor:"green",borderRadius:"7px"}}>delhi</div>
            <div className="text-center" style={{width:"100px",border:"1px solid black",backgroundColor:"green",borderRadius:"7px"}}>America</div>
            <div className="text-center" style={{width:"100px",border:"1px solid black",backgroundColor:"green",borderRadius:"7px"}}>India</div>
          </div>
         </div>

         <div className="row mt-5 mx-auto">
          <div className="col-md-4">
            <div className='height'>
              <h4>Country</h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className='height'>
              <h4>City</h4>
            </div>
          </div>
         </div>
      </div>
      </div>
    </div>
  )
}

