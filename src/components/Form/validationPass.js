const validationPass = (userData, errors, setErrors) =>{
    if(userData.password.length < 6 || userData.password.length > 10 ){
        setErrors({...errors, password:"La contraseña debe contener entre 6 a 10 caracteres"});
    }else if(!/\d/.test(userData.password)){
        setErrors({...errors, password:"La contraseña debe contener al menos un número"});
    }else{
        setErrors({...errors, password:""});
    };
}

export default validationPass;