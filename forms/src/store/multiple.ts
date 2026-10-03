import { create } from "zustand";
import initialData from "../database/initialData";
import page from "../database/page";
import { getterType } from "../types/types";

export const multipleStep = create((set , get:any) => ({
    paginate:"register1",
    input:initialData,
    changePagination:(e:React.MouseEvent<HTMLButtonElement>) => {
        const navigationBtn = e.target as HTMLButtonElement;
        const index = page.findIndex(item => item.path == get().paginate);

        if(navigationBtn.name == "previous")
           return  set({paginate:page[index - 1].path})

        if(get().paginate == "register1" && ( get().input.firstName.length <= 0 || get().input.lastName.length <= 0 )) 
            return
        else if (get().paginate == "register2" && ( get().input.email.length <= 0 || get().input.phoneNumber.length <= 0 ))
            return
        else if (get().paginate == "register3" && ( get().input.month.length <= 0 || get().input.year.length <= 0 ||  get().input.day.length <= 0 ))
            return
        else if (get().paginate == "register4" && ( get().input.password.length <= 0 || get().input.username.length <= 0 ))
            return

        if(navigationBtn.name == "next")
            if( index == 3 ) {
                set({input:initialData})

                return set({paginate:page[0].path})
            }

            set({paginate:page[index+1].path})
    },
    
    writeInput:(e:React.ChangeEvent<HTMLInputElement>) => {
        const el = e.target as HTMLInputElement;

        if(el.name == "firstName")
            set((current:getterType) => ({
                input: {
                    ...current.input,
                    firstName:el.value.trim()
                }
            }));

        else if(el.name == "lastName")
            set((current:getterType) => ({
                input: {
                    ...current.input,
                    lastName:el.value.trim()
                }
            }));

        else if(el.name == "email")
            set((current:getterType) => ({
                input: {
                    ...current.input,
                    email:el.value.trim()
                }
            }));

        else if(el.name == "phoneNumber")
            set((current:getterType) => ({
                input: {
                    ...current.input,
                    phoneNumber:el.value.trim()
                }
            }));

        else if(el.name == "day")
            set((current:getterType) => ({
                input: {
                    ...current.input,
                    day:el.value.trim()
                }
            }));

        else if(el.name == "month")
            set((current:getterType) => ({
                input: {
                    ...current.input,
                    month:el.value.trim()
                }
            }));

        else if(el.name == "year")
            set((current:getterType) => ({
                input: {
                    ...current.input,
                    year:el.value.trim()
                }
            }));

        else if(el.name == "password")
            set((current:getterType) => ({
                input: {
                    ...current.input,
                    password:el.value.trim()
                }
            }));

        else if(el.name == "username")
            set((current:getterType) => ({
                input: {
                    ...current.input,
                    username:el.value.trim()
                }
            }))

    }
}))