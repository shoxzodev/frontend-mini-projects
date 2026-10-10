"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function Email() {
    const { register , handleSubmit , formState:{errors , isSubmitted , isValid}  } = useForm();
    
    function submit() {
        alert("your email is correct")
    }

    return (
        <div className="p-3">
            <form onSubmit={handleSubmit(submit)}>
                <div className="flex">
                <input placeholder="email@gmail.com" className="text-gray-800 outline-0 border border-gray-200 px-2" type="text" 
                {...register("text" , {
                    required:"please fill the input",
                    minLength:{value:3 , message:"minimum 3 characters required"},
                    pattern:{value:/([a-z]|[A-Z]|[0-9]|[0-9]|[a-z]|[A-Z])@gmail.com$/ , message:"email is invalid"}  
                })}
            />
                <button className={`text-white px-3 py-1 ${isValid ? "bg-green-500" : "bg-gray-400/20"}`} type="submit">submit</button>   
                </div>
                <p className="text-red-500">{errors.text && errors.text.message as React.ReactNode }</p>
            </form>
        </div>
    )
}