import type { states } from "../types/interface";

const initialState:states = {
    top_status:false,
    bottom_status:false,
    left_status:false,
    right_status:false,
    text_status:false,
    box_status:false,
    zom_status:false,
    title_status:false,
    image_status:false
}

function reducer(state:states , action:{type:string}) {
    switch(action.type) {
        case "open_img":
            return {
                ...state, 
                image_status:true
            }
            
        case "close_img":
            return {
                ...state, 
                image_status:false
            }


        case "open_zom":
            return {
                ...state, 
                zom_status:true
            }
            
        case "close_zom":
            return {
                ...state, 
                zom_status:false
            }
        
         case "open_title":
            return {
                ...state, 
                zom_status:true
            }
            
        case "close_title":
            return {
                ...state, 
                zom_status:false
            }

        case "open_text":
            return {
                ...state, 
                text_status:true
            }
            
        case "close_text":
            return {
                ...state, 
                text_status:false
            }
        
        case "open_box":
            return {
                ...state, 
                box_status:true
            }
            
        case "close_box":
            return {
                ...state, 
                box_status:false
            }

        case "close_top":
            return {
                ...state,
                top_status:false
            }
        
        case "open_top":
            return {
                ...state,
                top_status:true
            }
        
        case "open_bottom":
            return {
                ...state,
                bottom_status:true
            }
        
        case "close_bottom":
            return {
                ...state,
                bottom_status:false
            }
        
        case "open_left":
            return {
                ...state,
                left_status:true
            }
        
        case "close_left":
            return {
                ...state,
                left_status:false
            }

        case "open_right":
            return {
                ...state,
                right_status:true
            }
        
        case "close_right":
            return {
                ...state,
                right_status:false
            }
        
        default:
            return state
    }
}

export default { initialState , reducer }