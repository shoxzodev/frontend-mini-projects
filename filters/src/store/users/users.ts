import React from "react";
import { create } from "zustand";
import users from "../../database/users";
import { userStore, usersType } from "@/src/types/elements.types";

export const user = create((set) => ({
    data: null,
    open:false,
    sortByName:() => {
        set((state:userStore) => ({
            data:Array.isArray(state.data) ? [...state.data].sort((a:usersType , b:usersType) => 
            {
                if(a.name > b.name)
                    return 1
                else if (a.name < b.name )
                    return -1
                else 
                    return 0
            }) : null
        }))
    } ,
    sorting:() => {
        set((state:userStore) => ({
            data:Array.isArray(state.data) ? [...state.data].sort((a:usersType , b:usersType) => 
            {
                if(a.country.name > b.country.name)
                    return 1
                else if (a.country.name < b.country.name )
                    return -1
                else 
                    return 0
            }) : null
        }))
    },
    openSide: () => set((state:userStore) => ({open:state.open ? false : true})),
    setData:(newData:userStore) => set({ data:newData }),
    filterUser:(e:React.ChangeEvent<HTMLElement>) => {
        const element = e.target as HTMLInputElement;

        const filter = users.filter(item => {
            const find = new RegExp(`^${element.value.toLowerCase().trim()}`, "i");
            
            if (find.test(item.name.toLowerCase().trim()))
                return item
        });

        set({data:filter})
    }
}));