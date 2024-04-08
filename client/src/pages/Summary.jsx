import React, { useState } from 'react'
import { ChatForm } from '../components'
import customFetch from '../utils/customFetch'
import {useActionData} from 'react-router-dom'
export const action= async ({request}) =>{

  const formData = await request.formData()
  const   datar= Object.fromEntries(formData)
  
   try {
      const {data}= await customFetch.post('/openAi/summarize', datar)
      return data
   } catch (error) {
      console.log(error.response?.data || error.msg)
      return {error}
   }
}
const Summary = () => {

  const data=useActionData()
 const textRes= data?.text
 console.log(textRes)
  return (
    <ChatForm heading="to summarize it" buttonText="Summarize" textRes={textRes}/>
  )
}

export default Summary