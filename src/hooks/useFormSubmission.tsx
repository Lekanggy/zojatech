import React, {useState, useContext, useEffect } from 'react'
import { FormContextCtx } from '../components/context/ContextProvider'

import useDataState from './useDataState'
import { client } from '../utilities/axios-instanace'
import { showToast } from '../utilities/showToast'

//import { useNavigate } from 'react-router-dom'


const useFormSubmission = (url?: string, route?:string, navigate?: (k:string)=> void) => {
 const {formData,serverRes, setServerRes, setFormData} = useContext(FormContextCtx)
 const [isSubmitting, setIsSubmitting] = useState(false)

 const {dataState, setDataState} = useDataState()
 
 

 

 const handleData = (e:React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    const {name, value} = e.target
    // console.log(name)
    if(name === "username"){
        setFormData(prev=> {
            return {
                ...prev,
                [name]: value.toLowerCase()
            }
        })
    }else{
        setFormData(prev=> {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    
 }

 

 const handleSubmit = (e:React.FormEvent<HTMLButtonElement | HTMLDivElement>)=>{
    e.preventDefault()
  
    if(formData !== null && Object.values(formData).every(v=> v !== "" || v.length > 0)){
        setIsSubmitting(true)
        setDataState("loading")
        showToast('Sending data...', 'loading');
    }
   
    return;
 }

 
 


 useEffect(()=>{
    const sendData:() => Promise<void> = async ()=>{
       
        const request =  client()
        
       
        //console.log("inside", data)
        try {
            await request.post(url!, formData).then(res=>{
                console.log(res)
                setDataState("success")
                showToast("Data successfully processed", 'success');
                setFormData({})
                if(route === "register"){
                    navigate && navigate("/confirm-inbox")
                }

                if(route === "login"){
                    navigate && navigate("/dashboard")
                }
                
                
            }).catch(err=>{
                setDataState("failed")
                console.log(err)
                showToast("Failed to process data...", 'error');
               
            })
           
        } catch (error) {
            setDataState("failed")
        }
    
     }

    if(isSubmitting){
        setIsSubmitting(false)
        setTimeout(()=>{
            sendData() 
        },500)
       
    }
   
 },[
    isSubmitting, 
    setIsSubmitting, 
    setDataState, 
    formData, 
    url, 
    route, 
    setFormData, 
    setServerRes, 
    navigate, 
])



    return {
        formData, 
        handleData, 
        handleSubmit, 
        dataState, 
        showToast, 
        setFormData, 
        setDataState,
        serverRes,
        setServerRes,
    }


}

export default useFormSubmission