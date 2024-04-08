import React from 'react'
import { ChatForm } from '../components'
import {useActionData} from 'react-router-dom'
import customFetch from '../utils/customFetch'
import {toast} from 'react-toastify'


export const action= async ({request}) =>{

  const formData = await request.formData()
  const   datar= Object.fromEntries(formData)
  
   try {
      const {data}= await customFetch.post('/openAi/chat', datar)
      return data
   } catch (error) {
      toast.error(error.response?.data?.msg)
      return {error}
   }
}
const ChatBot = () => {
  const data=useActionData()
  const textRes= data?.text?.trim()
  return (
    <ChatForm heading="get response" buttonText="Get Response" textRes={textRes}/>
  )
}

export default ChatBot