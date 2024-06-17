import React, { useState } from 'react'
import PropsChild from '../components/PropsChild'

const Props = () => {
    const [msg,setMsg] =useState("")
    const [childMsg , setChildMsg] = useState("")
    const[data,setData] = useState("")

    const handleSend = ()=>{
        setData(msg);
        setMsg("");
    }
    const sendValue = (data) =>{
        setChildMsg(data)
    }
  return (
    <>
    <div className='flex'>
      <input
      type="text"
      value={msg}
      onChange={(e)=>setMsg(e.target.value)}
      className='bg-white text-black'
      placeholder='enter message'
      />
      <button className=' bg-green-700 '  onClick={handleSend}>send</button>


      <h3>Child msg: </h3>
      <p>{childMsg}</p>
    </div>
    <div >
        
        <PropsChild message={data} sendValue={sendValue} />
    </div>
    </>
  )
}

export default Props
