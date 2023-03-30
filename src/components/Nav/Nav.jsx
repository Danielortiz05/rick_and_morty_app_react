import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import styles from "./Nav.module.css"
import { NavLink } from "react-router-dom";

export default function Nav (props){

    return(
        <div className={styles.nav}>
            <NavLink to={'/home'}>
                <span>Home</span>
            </NavLink>
            <NavLink to={'/about'}>
                <span>About</span>
            </NavLink>
            <SearchBar onSearch={props.onSearch}/>
        </div>
        
    )

} 