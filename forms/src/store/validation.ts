import { create } from "zustand";
import { errorType } from "../types/types";

export const isValid = create((set) => ({
    errors: {
        lowerCase:false,
        upperCase:false,
        number:false,
        min:false
    },
    password:"",
    visibility:false,
    closeValidation:() => set({visibility:false}),
    validation: (e:React.ChangeEvent<HTMLInputElement>) => {
        const el = e.target as HTMLInputElement;
        const text = el.value.trim();

        set({visibility:true})

        if(text.match(/[a-z]/))
            set((current:errorType) => ({
                errors: {
                    ...current.errors,
                    lowerCase:true        
                }
            }))
        else
            set((current:errorType) => ({
                errors: {
                    ...current.errors,
                    lowerCase:false        
                }
            }))

        if(text.match(/[A-Z]/))
            set((current:errorType) => ({
                errors: {
                    ...current.errors,
                    upperCase:true        
                }
            }))
        else
            set((current:errorType) => ({
                errors: {
                    ...current.errors,
                    upperCase:false        
                }
            }))

        if(text.match(/[0-9]/))
            set((current:errorType) => ({
                errors: {
                    ...current.errors,
                    number:true        
                }
            }))
        else
            set((current:errorType) => ({
                errors: {
                    ...current.errors,
                    number:false        
                }
            }))
            

        if(text.length >= 8)
            set((current:errorType) => ({
                errors: {
                    ...current.errors,
                    min:true        
                }
            }))
        else 
            set((current:errorType) => ({
                errors: {
                    ...current.errors,
                    min:false        
                }
            }))
        
        set({password:text})
    }

}))