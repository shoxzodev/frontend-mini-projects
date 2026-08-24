export interface paginations {
    id:number , 
    number:number , 
    path:string
} 

export interface states {
    top_status:boolean,
    bottom_status:boolean,
    left_status:boolean,
    right_status:boolean,
    text_status:boolean,
    box_status:boolean,
    zom_status:boolean,
    title_status:boolean,
    image_status:boolean
} 

export interface overlayLists {
    id:number,
    name:string,
    path:string
}