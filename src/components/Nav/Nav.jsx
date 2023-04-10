import React from "react";
import SearchBar from "../SearchBar/SearchBar"
import styles from "./Nav.module.css"
import { NavLink, useLocation } from "react-router-dom";

export default function Nav (props){
    let location = useLocation();
    if(location.pathname === "/"){
        return <></>;
    }else{
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
} 