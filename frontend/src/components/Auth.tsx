import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LabelledInput } from "./LabelledInput";
import { BACKEND_URL } from "../config";
import type { SignupType } from "@sravansurya/common-medium";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setpostInputs] = useState<SignupType>({
        name:"",
        email:"",
        password:""
    });

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup"?"signup":"signin"}`,postInputs)
            const jwt = response.data.jwt
            localStorage.setItem("token",jwt)
            navigate("/blogs")
        } catch (e) {
            alert("Error while signing up")   
        }
    }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
            <div className="px-8">
            <div className="text-3xl font-extrabold">Create an account</div>
            <div className="text-slate-400">
                {type === "signin" ?"Don't have an account?" : "Already have an account?"} <Link className="pl-2 underline" to={type==="signin" ? "/signup" : "/signin"}>{type === "signin" ? "Sign up" : "Sign in"}</Link>
            </div>
            </div>
            <div className="pt-8">
               {type === "signup" ? <LabelledInput label="Name" placeholder="John Doe.." onChange={(e)=>{
                    setpostInputs(({
                        ...postInputs,
                        name:e.target.value
                    }))
                }} /> : null}
                <LabelledInput label="email" placeholder="JohnDoe@gmail.com" onChange={(e)=>{
                    setpostInputs(({
                        ...postInputs,
                        email:e.target.value
                    }))
                }} />
                <LabelledInput label="password" type={"password"} placeholder="JohnDoe@123" onChange={(e)=>{
                    setpostInputs(({
                        ...postInputs,
                        password:e.target.value
                    }))
                }} />
                <button onClick={sendRequest} type="button" className="w-full mt-5     text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign up" : "Sign In"}</button>
            </div>
        </div>
      </div> 
    </div>
  );
};

export default Auth;
