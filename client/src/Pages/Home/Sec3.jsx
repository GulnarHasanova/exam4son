import React from 'react'
import './Sec3.jsx'
import { useState,useEffect } from 'react'
import axios from 'axios'

function Sec3() {
  const [datas,setDatas]=useState([])
  const [searched,setSearched]=useState([])

  useEffect(()=>{axios.get("http://localhost:4000/flows")
  .then(res=>setDatas(res.data))

  },[])


  return (
  <>
  <div className='container'>
  <div className="row">
    <div className="col-4">
        <p>Devoted to wonderful beauty</p>
        <h1>Flowers Pricing</h1>
    </div>
  </div>
  <div className="row">

  
 
   
    <input type="text" name="name" onChange={(e)=>{setSearched(e.target.value)}} />
 
 

  {datas.filter(item=>item.name.includes(searched)).map((data,index) => (
    <div className="col-4 card" key={index}>
        <div><img src={data.img} alt="sekil" /></div>
        <div>{data.name}</div>
        <div>{data.price}</div>
        <button className='btn btn-danger'>delete</button>
    </div>
    
  ))
}
  
  </div>

  </div>
  
  </>
  )
}

export default Sec3