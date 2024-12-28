"use client"
import { useEffect, useState } from "react";
import { auth } from "@/firebase.config";
import toast from "react-hot-toast";
import { onAuthStateChanged} from "firebase/auth";
import { ENV } from "../constants/env";

export const useAPI = ()=>{
    // const [res,setRes] = useState(null);
    const [error,setError] = useState<string | null>(null);
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
            if(!userToken && loginRequired && ENV==="prod")
            {
                toast.error("User not logged in");
                setError("User Not LoggedIn.")
                return; 
            }
            // console.log("USERTOKEN:" + userToken)
            const response = await fetch(`http://localhost:3001/api/v1`+url, {
                method:type,
                body:type === "GET" ? null : JSON.stringify(dataToSend),
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${loginRequired ? userToken : ""}`
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