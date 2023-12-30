//import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { client } from "../utilities/axios-instanace"



function useSubmitForm <T extends {[k:string]:any}>(){
  const {register, handleSubmit, formState:{errors}} = useForm<T>()
 
  const onSubmit = async (data: T)=>{
    console.log("subdata",data)
    const request = client()
    try {
      await request.post("", data).then(res=>{
        console.log(res)
      }).catch(error=>{
        console.log(error)
      })
    } catch (error) {
      console.log(error)
    }
  }

  return {register, handleSubmit, onSubmit, errors}
    
}

export default useSubmitForm