import { create } from "zustand";
import customSelect from "../database/customSelect";
import { customSelectType } from "../types/types";
import React from "react";

export const selector = create((set , get:any) => ({
    selected:customSelect[0].title,
    data:customSelect,
    hide:false,
    main:(e:React.MouseEvent<HTMLButtonElement>) => {
        const element = e.target as HTMLButtonElement;
        const changeInput = document.getElementById("changeInput") as HTMLInputElement;
        changeInput.value = element.name;
        set({selected:element.name , hide:false});
    },
    selectors: () =>  set((current:customSelectType) => ({hide:current.hide ? false : true })),

    keyboard : (e:React.KeyboardEvent<HTMLButtonElement>) => {    
        const filter = customSelect.findIndex(item => item.title == get().selected);
        const changeInput = document.getElementById("changeInput") as HTMLInputElement;

        if(e.key == "ArrowDown") {
            if(filter < 3)
                return set({selected:customSelect[filter+1].title})

            set({selected:customSelect[0].title})

        } else if (e.key == "ArrowUp" && filter > 0)
            set({selected:customSelect[filter-1].title})
        else if(e.key == "Enter") {
            changeInput.value = get().selected;
            set({hide:false})
        }
    },
    closeSelect:(e:React.MouseEvent<HTMLDivElement>) => {
        const element = e.target as HTMLDivElement;

        if(element.id == "close" || element.id == "closeList")
            set({hide:false})
    },
    changeInput:(e:React.ChangeEvent<HTMLInputElement>) => {
        const element = e.target as HTMLInputElement;
        const text = element.value;

        const filter = customSelect.filter(item =>
            new RegExp(`^${text.trim().toLowerCase()}` , "i").test(item.title.toLowerCase()));

        set({hide:true , data:filter , selected: filter.length > 0 ? filter[0].title : "" });
    },
    writeToInput:(target:any) => {
        const inputEl  = target as HTMLInputElement;
        inputEl.value = get().selected;
    },
    handleSubmit: (e:React.SubmitEvent) => {
        e.preventDefault();
        const changeInput = document.getElementById("changeInput") as HTMLInputElement;

        alert(changeInput.value);
    }

}))