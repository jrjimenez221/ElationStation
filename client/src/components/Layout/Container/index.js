import React from 'react'

export const Container = () => {
    return (
        <div className="container-fluid  no-gutters mt-0 row p-0 m-0 bg-info" style={{minHeight:"50vh"}} >

      <div className="col-12 row p-0 m-0 bg-danger" style={{maxHeight:"100%"}}>

        <div className="col-12 col-md-1 row p-0 bg-secondary" >


          <div className="col-10 " style={{maxHeight:"100%"}}>
            <Directory/>
          </div>

        </div>

        <div className="col-11 row bg-info m-0 p-0">

         
          <RightSide />
          <div className="col-md-1" >sd</div>
          <Portfolio />
          
        </div>


      </div> 
    </div>
    )
}
