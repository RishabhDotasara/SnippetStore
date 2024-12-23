import { useEffect, useState } from "react";
import { auth } from "../../firebase.config";
import toast from "react-hot-toast";
import { onAuthStateChanged} from "firebase/auth";

export const useAPI = ()=>{
    // const [res,setRes] = useState(null);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(false);
    const [userToken, setUserToken] = useState<string | null>(null);

    const getTheToken = async ()=>{
        await new Promise<void>((resolve) => {
            const unsubscribe = onAuthStateChanged(auth, async (user) => {
                if (user) {
                    const userToken = await user.getIdToken();
                    setUserToken(userToken);
                    unsubscribe();
                    resolve();
                }
            });
        });
    }

    useEffect(()=>{
         getTheToken();
    },[])
    
    const makeRequest = async (url:string, type:"POST" | "GET" | "DELETE" | "PATCH", dataToSend?:any, loginRequired:boolean=true)=>{
        try{
            setLoading(true);
            if(!userToken && loginRequired)
            {
                
                toast.error("User not logged in");
                return; 
            }
            // console.log("USERTOKEN:" + userToken)
            const response = await fetch("http://localhost:3001/api/v1"+url, {
                method:type,
                body:type === "GET" ? null : JSON.stringify(dataToSend),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${userToken}`
                }
            });
            const data = await response.json();
            return data
            // setRes(data);
        }catch(err:any){
            setError(err);
        }finally{
            setLoading(false);
        }
    }

    return {error,loading,makeRequest};
}