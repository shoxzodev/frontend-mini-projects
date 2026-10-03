import { ChangeEvent } from "react";
import { create } from "zustand";
import { forming, loginType } from "../types/types";
import login from "../validation/login";
import sha256 from "sha256";

export const logins = create((set , get: loginType ) => ({
    status:false,
    bool:false,
    visibility:false,
    data: {
        user:"",
        password:""
    },
    error: {
        user:"",
        password:""
    },

    setStatus:(state:boolean) => {
        set({status:state})
    },
    setVisibility:() => set((state) => ({ visibility:state.visibility ? false : true })),
    changeInput: function(event:React.ChangeEvent<HTMLInputElement>) {
        const element = event.target as HTMLInputElement;

        if(element.name == "name")
            set((state:any) => ({
                data: {
                    ...state.data,
                    user:element.value
                }
            }))

        else if(element.name == "password")
            set((state:any) => ({
                data: {
                    ...state.data,
                    password:element.value
                }
            }))
    },

    changeSaving: function(e:ChangeEvent<HTMLInputElement>) {
        const element = e.target as HTMLInputElement;
        if(element.checked)
            set({bool:true})
        else
            set({bool:false})
    },

    changePassword: function() {
        const user = prompt("please input your name !");
        const localData:forming = JSON.parse(localStorage.getItem("user") as string); 

        if(user == localData.user) {
            const newPassword = prompt("set new password"); 

            localStorage.setItem( "user", JSON.stringify({
                ...localData,
                password:newPassword
            },null,2))
        } else 
            alert("you are not user!")
    },

    sumbitData: function(e:React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        const validator = login.safeParse(get().data);

        if(validator.error) {
            const body = JSON.parse(validator.error.message);
            const errorStates:{[index:string]:false | string} = { user:false , password:false };

            body.forEach(
                (item:any) => {
                    if( item.path[0] == "user" || item.path[0] == "password" )
                        errorStates[item.path[0]] = item ? item.message : false
                }
            );

            return set({error:{user:errorStates.user ? errorStates.user : "" , password: errorStates.password ? errorStates.password : ""}})
        }

        set({error:{user:"" , password:""}})

        const localData:forming = JSON.parse(localStorage.getItem("user") as string);         

        if(localData.user == get().data.user && localData.password == sha256(get().data.password)) {
            alert("you logged successfully");
            
            if(!get().bool)
                set({data:{user:"" , password:""}});

            set({status:false})
        } else {
            alert("password or username is not valid")
            
            if(!get().bool)
                set({data:{user:"" , password:""}});
        }
    }
}))