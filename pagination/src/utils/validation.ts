function checkInput(e:React.ChangeEvent , setErrorName:any) {
        const el = e.target as HTMLInputElement;

        if(el.value.trim() == "" || el.validity.valueMissing) {
            if(el.name == "full_name")
                setErrorName((current:any) => {
                    return {
                        ...current,
                        text: "the field must not be an empty"
                    }
                });
            else if(el.name == "password")
                setErrorName((current:any) => {
                    return {
                        ...current,
                        password: "the field must not be an empty"
                    }
                });
             else if(el.name == "age")
                setErrorName((current:any) => {
                    return {
                        ...current,
                        age: "the field must not be an empty"
                    }
                });
           

        } else if(!el.checkValidity()) {
            if(el.name == "full_name")
                setErrorName((current:any) => {
                    return {
                        ...current,
                        text: el.validationMessage
                    }
                });
            else if (el.name == "password")
                setErrorName((current:any) => {
                    return {
                        ...current,
                        password: el.validationMessage
                    }
                });
             else if(el.name == "age")
                setErrorName((current:any) => {
                    return {
                        ...current,
                        age: el.validationMessage
                    }
                });
        }  else {
            if(el.name == "full_name")
                setErrorName((current:any) => {
                    return {
                        ...current,
                        text:null
                    }
                })
            else if (el.name == "password")
                setErrorName((current:any) => {
                    return {
                        ...current,
                        password:null
                    }
                })
            else if(el.name == "age")
                setErrorName((current:any) => {
                    return {
                        ...current,
                        age: null
                    }
                });
        }
    }

export default checkInput