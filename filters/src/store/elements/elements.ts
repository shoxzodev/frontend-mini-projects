import { elements } from "@/src/database/element";
import { element } from "@/src/types/elements.types";
import { create } from "zustand";

export const elem = create((set , get:() => {status:string}) => ({
    status:'all',

    setStatus:(title:string) => set({status:title}),

    changeData:():null | element[] => {
        let status:null | string = null;

        status = get().status;
        
        if(status == "all")
             return elements.all()
        else if(status == "animals")
            return elements.animals
        else if(status == "cars")
            return elements.cars
        else if(status == "colors")
            return elements.colors
        else if(status == "fruits")
            return elements.fruits

        return null
    }
}))