import { useState} from "react";
import validation from "./validation";
import validationPass from "./validationPass";
import styles from "./Form.module.css"

export default function Form ({login}){

    const [userData, setUserData] = useState({
        username:"", 
        password:""});

    const [errors, setErrors] = useState({
        username: "",
        password:""
    });

    function handleInputChange(event){
        const valueInput = event.target.value;
        setUserData({...userData,[event.target.name]:valueInput});
        validation({...userData,[event.target.name]:valueInput}, errors, setErrors);
    }

    function handleInputChangePass(event){
        const valueInput = event.target.value;
        setUserData({...userData,[event.target.name]:valueInput});
        validationPass({...userData,[event.target.name]:valueInput}, errors, setErrors);
    }

    function handleSubmit(event){
        event.preventDefault();
        login(userData);
    }

    return (
        <form className={styles.formContainer} onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" placeholder="Username" value={userData.username} onChange={handleInputChange} />
                <p className={styles.errorsMessage}>{errors.username}</p>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" placeholder="Password"  value={userData.password} onChange={handleInputChangePass}/>
                <p className={styles.errorsMessage}>{errors.password}</p>
            </div>
            <button className={styles.formButton} >Ingresar</button>
        </form>
    );
}