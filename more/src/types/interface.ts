import { timerType } from "./type";
export interface timerInterface { timer:timerType , mount:boolean }

export interface progressBars { limit:boolean , process:number }
export interface actionType { payload:boolean | number , type:string  };