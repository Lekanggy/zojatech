import  { useContext } from 'react'
import { DataStateCtx } from '../components/context/ContextProvider'

const useDataState = () => {
 const {dataState, setDataState} = useContext(DataStateCtx)
 return {dataState, setDataState}
}

export default useDataState