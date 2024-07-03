import { useEffect, useState } from "react";
import  { server_calls } from '../api/server'



export const useGetData = () => {
    const [ CarData, setData] = useState<[]>([])
  
    async function handleDataFetch(){
      const result = await server_calls.get();
      setData(result)
    }
  
    useEffect( () => {
      handleDataFetch();
    }, [])
  
    return { CarData, getData:handleDataFetch}
  }