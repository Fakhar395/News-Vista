import React from 'react'

const contact = () => {
  return (
    <div>
       <>
       
       <form className="container">
  <div className="form-group  mt-4">
    <label for="exampleInputEmail1">User Name</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div className="form-group  mt-4">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
   
  </div>
  <div class="form-group mt-3">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
 
  <button type="submit" className="btn btn-primary mt-3">Send</button>
</form>
       
       </>
    </div>
  )
}

export default contact
