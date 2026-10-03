export type element = {id:number , model:string}
export type usersType =   {
            id:number,
            name:string,
            country: {
                id:number,
                name:string,
            }
        };

export type userStore = {
    data:null | usersType[],
    open:boolean,
    filterUser: () => void
}