import React, { 
    useState, 
    createContext,
   
    SetStateAction, 
} from "react";

/************************BOOLEAN CONTEXT**********************************/
type BooleanProp = {
    bol: boolean,
    setBol: React.Dispatch<SetStateAction<boolean>>
}

export const BooleanCtx = createContext<BooleanProp>({} as BooleanProp)

/************************DATA STATE**********************************/

type DataState = {
 dataState: string
 setDataState: React.Dispatch<SetStateAction<string>>
}



export const DataStateCtx = createContext<DataState>({} as DataState)

/************************FORM SUBMISSION STATE**********************************/
type FormData = {
  [name:string]: any
}
type FormContext = {
  formData:  {[name:string]: any}
  serverRes:  {[name:string]: any} | null
  setServerRes: React.Dispatch<SetStateAction<{[name:string]: any}>>
  setFormData: React.Dispatch<SetStateAction<{[name:string]: any}>>
}


export const FormContextCtx = createContext<FormContext>({} as FormContext)

const formDatas:FormData = {}



const ContextProvider = ({children}:{children: React.ReactNode}) => {
    const [bol, setBol] = useState(false)

    const [formData, setFormData] = useState<FormData>(formDatas)
    const [dataState, setDataState] = useState<string>("idle")
    const [serverRes, setServerRes] = useState<{[name:string]: any}| null>(null)

   

   
   
  return (
    <BooleanCtx.Provider value={{bol, setBol}}>
      <DataStateCtx.Provider value={{dataState, setDataState}}>
        <FormContextCtx.Provider value={{formData, serverRes, setServerRes, setFormData}}>
            {children}
        </FormContextCtx.Provider>
      </DataStateCtx.Provider>
       
    </BooleanCtx.Provider>
  )
}

export default ContextProvider