
import React from 'react'
import { ChatForm } from '../components'
import {useActionData} from 'react-router-dom'
import customFetch from '../utils/customFetch'
import {toast} from 'react-toastify'


export const action= async ({request}) =>{

  const formData = await request.formData()
  const   datar= Object.fromEntries(formData)
  
   try {
      const {data}= await customFetch.post('/openAi/code', datar)
      return data
   } catch (error) {
      toast.error(error.response?.data?.msg)
      return {error}
   }
}

const JsCode = () => {
  const data=useActionData()
  const textRes= data?.text?.trim().split('\n')
  console.log(textRes);

  return (
    <ChatForm heading=" get Javascript code" buttonText="Get the Code" textRes={textRes} ispara/>
  )
}

export default JsCode