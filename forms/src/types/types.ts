export type forming = { user:string , password:string };

export type loginType = () => { 
    status:boolean , 
    bool:boolean , 
    visibility:boolean,
    error:{
        user:string , 
        password:string
    },
    data:{ 
        user:string , 
        password:string 
    }, 
    };

export type errorType =  {
        errors: {
            lowerCase:boolean,
            upperCase:boolean,
            number:boolean,
            min:boolean
        },
        visibility:boolean,
    };

export type inputType = {
        firstName:string,
        lastName:string,
        username:string,
        password:string,
        email:string,
        phoneNumber:string,
        day:string,
        month:string,
        year:string,
    }

export type getterType = {
    paginate:string,
    input:inputType
}

export type customSelectType = {
    selected:string,
    hide:boolean
}
