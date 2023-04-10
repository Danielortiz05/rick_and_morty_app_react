import { useState } from "react";
import validation from "./validation";
import styles from "./Form.module.css"

export default function Form (){

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

    return (
        <form className={styles.formContainer}>
            <div>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" placeholder="Username" value={userData.username} onChange={handleInputChange} />
                <p>{errors.username}</p>
            </div>
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" name="password" placeholder="Password"  value={userData.password} onChange={handleInputChange}/>
                <p>{errors.password}</p>
            </div>
            <button className={styles.formButton}>Ingresar</button>
        </form>
    );
}