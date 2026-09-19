import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Heading2 } from 'lucide-react'

const App = () => {
const [data, setdata] = useState([])

const [index, setindex] = useState(1)
const getdata= async () => {
const response= await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
setdata(response.data)
console.log(response.data)
}
useEffect(function(){
getdata()
},[index])

let printuserdata=<h3 className='text-2xl  text-white absolute top-1/2 left-1/2 -translate-x-1/2 '>loading...</h3>
if(data.length>0){
  printuserdata=data.map(function(elem,idx){
    return  <a href={elem.url} target='_blank'>
      <div>
   
    <div className='h-50 w-55 bg-white rounded-xl'>
     <img  className='h-full w-full  object-cover'src={elem.download_url} alt="" />
    </div>
    <h2 className='font-bold font-serif'>{elem.author}</h2>
   
    </div>
      </a>
   
  })
}




  return (
    <div className='bg-black h-screen text-white p-4 overflow-auto '>
   
    <div className='flex flex-wrap gap-6'>
      {printuserdata}
    </div>

<div className='flex justify-center items-center gap-6 mt-8'>
  <button className='bg-amber-500 w-30 h-12 px-3 py-2 text-black rounded active:scale-95'
   onClick={()=>{
if(index>1){
  
  setindex(index-1)
  setdata([])
}
   }}
   >prev</button>
  <button className='bg-amber-500 w-30 h-12 px-3 py-2 text-black rounded active:scale-95'
  onClick={()=>{
setindex(index+1)
setdata([])
  }}
  >next</button>
</div>





    </div>
  )
}

export default App
