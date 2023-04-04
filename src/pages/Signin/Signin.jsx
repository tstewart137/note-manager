import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary"
import { Link } from "react-router-dom"
import s from './style.module.css'
import { Input } from "components/Input/Input";
import { AuthLayout } from "Layouts/AuthLayout/AuthLayout";
import { Signup } from "pages/Signup/Signup";
import { useState } from "react";
import { setUser } from "store/auth/auth-slice";
import { useDispatch } from "react-redux";
import { AuthAPI } from "api/auth";

export function Signin(){

    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    const dispatch = useDispatch();

    const submit= async (e)=>{
        e.preventDefault();
        const  user = await AuthAPI.Signin(email, password)
        dispatch(setUser(user));
      

    }
    const form = (
        <div className={s.formContainer}>
            <h2 className={s.title}>
                Sign in <br/>
            to access your team notes
            </h2>
            <form onSubmit={submit}className={s.formGroup}>
                <Input placeholder={"Email"} onTextChange={setEmail}/>
                <Input placeholder={"Password"} type="password" onTextChange={setPassword}/>
                <ButtonPrimary type="submit" className={s.button}>Sign In</ButtonPrimary>
                <span>
                    Don't have an account yet? Sign up here. <Link to={"/signup"}>Sign Up</Link>
                    </span>
            </form>
        </div>
    );

    return <AuthLayout>{form}</AuthLayout>;
}