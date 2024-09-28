import React from 'react'

function Catalog() {
  return (
    <>
    <h3 className="text-center">Please select the courses that look most interesting to you!</h3>
      <div className="d-flex align-items-center" style={{height: "92vh"}}>
        <div className="row justify-content-between" style={{width: "100%"}}>
          <div className="col-3 text-center">
            <p>Card1</p>
          </div>
          <div className="col-3 text-center">
            <p>Card2</p>
          </div>
          <div className="col-3 text-center">
            <p>Card3</p>
          </div>
          <div className="col-3 text-center">
            <p>Card4</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Catalog
