import React from 'react'
import { ChatForm } from '../components'
import {useActionData} from 'react-router-dom'
import customFetch from '../utils/customFetch'
import {toast} from 'react-toastify'


export const action= async ({request}) =>{

  const formData = await request.formData()
  const   datar= Object.fromEntries(formData)
  
   try {
      const {data}= await customFetch.post('/openAi/extract', datar)
      return data
   } catch (error) {
      toast.error(error.response?.data?.msg)
      return {error}
   }
}
const Para = () => {
  const data=useActionData()
  const textRes= data?.text?.trim().split('*').filter(item => item.trim() !== "")
  console.log(textRes)
    
  
  return (
    <ChatForm heading="Get the key points" buttonText="Get the bullets" textRes={textRes} ispara />
  )
}

export default Para