export type stateType = {
    open:boolean,
    prompt:string,
    text:string,
}

export type tooltipType = {
        id:number,
        name:"Top" | "Right" | "Bottom" | "Left",
        class1:string,
        class2:string
    };
    
export type slideshowType = {
    text:number,
    changes:{
        id:number,
        paragraph:string,
        italic:string
    }
};

export type posterType = "odd" | "even" | "both";

export type timerType = { 
    day:number,
    hour:number,
    minutes:number,
    seconds:number
};