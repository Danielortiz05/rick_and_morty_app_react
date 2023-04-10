const validation= (userData, errors, setErrors) =>{
    //Username
    if(!userData.username){
        setErrors({...errors, username:"Por favor complete este campo"});
    }else if(userData.username.length > 35){
        setErrors({...errors, username:"No puede superar los 35 caracteres"});
    }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userData.username)){
        setErrors({...errors, username:"Email inválido"});
    }else{
        setErrors({...errors, username:""});
    };
    if(userData.password.length < 6 || userData.password.length > 10 ){
        setErrors({...errors, password:"La contraseña debe contener entre 6 a 10 caracteres"});
    }else if(!/\d/.test(userData.password)){
        setErrors({...errors, password:"La contraseña debe contener al menos un número"});
    }else{
        setErrors({...errors, password:""});
    };
}


export default validation;