import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Mybooking = () => {

      useEffect(()=>{

        let api=' http://localhost:3000/movie '
        axios.get(api).then((res)=>{
            console.log(res.data);
            
        }).catch((err)=>{
            console.log(err);
            
        })
    },[])
  return (
    <>
      
    </>
  )
}

export default Mybooking
