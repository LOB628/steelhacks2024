import { useState } from 'react'

interface CatalogProps {
  resp: string
}

function Catalog({ resp } : CatalogProps) {
  const [card1Selected, setCard1Selected] = useState(false)
  const [card2Selected, setCard2Selected] = useState(false)
  const [card3Selected, setCard3Selected] = useState(false)
  const [card4Selected, setCard4Selected] = useState(false)

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
