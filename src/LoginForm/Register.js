import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';
const Register = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')

    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: "",
        cpassword: ""
    })

    const submiHander = (event) => {
        event.preventDefault();
        const data = { username, email, password, cpassword }
        axios.post("https://jsonplaceholder.typicode.com/users", data).then(response => {
            console.log(response.data)
            // event.target.reset()
        })

        if (username === "") {
            setErrors((errors) => ({ ...errors, username: "Please Enter Username" }))
        } else if (username.length < 3) {
            setErrors((errors) => ({ ...errors, username: "Username must be 3 charecters" }))
        } else {
            setErrors((errors) => ({ ...errors, username: "" }))
        }

        if (email.trim() === "") {
            setErrors((errors) => ({ ...errors, email: "Enter Email" }))
        }
        else if (!emailPatern.test(email)) {
            setErrors((errors) => ({ ...errors, email: "Enter Valid Email" }))
        }
        else {
            setErrors((errors) => ({ ...errors, email: "" }))
        }
        if (password.trim() === "") {
            setErrors((errors) => (({ ...errors, password: "Please Enter Password" })))
        } else if (password.trim().length < 8) {
            setErrors((errors) => (({ ...errors, password: "Password Must Be 8 Charecters" })))
        } else {
            setErrors((errors) => ({ ...errors, password: "" }))
        }

        if (cpassword.trim() === "") {
            setErrors((errors) => (({ ...errors, cpassword: "Please Enter Password" })))
        } else if (cpassword.trim() !== password.trim()) {
            setErrors((errors) => (({ ...errors, cpassword: "Password And Confirm Password Must Be Same" })))
        } else {
            setErrors((errors) => ({ ...errors, cpassword: "" }))
        }
    }
    const emailPatern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-7'>
                    <div className="background">
                        <img src='logo.jpg' />
                    </div>
                </div>

                <div className='col-md-5 back'>
                    <form className='form' onSubmit={submiHander}>
                        <h4 className='text-white'>Create Account</h4>
                        <div className='fields'>
                            <label htmlFor='username'>Username</label>
                            <input type='text' name='username' id='username' value={username} placeholder='username' onChange={(e) => setUsername(e.target.value)} />
                            <p className='text-danger'>{errors.username && errors.username}</p>
                        </div>

                        <div className='fields'>
                            <label htmlFor='email'>E-mail</label>
                            <input type='text' id="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            <p className='text-danger'>{errors.email && errors.email}</p>
                        </div>

                        <div className='fields'>
                            <label htmlFor='password'>Password</label>
                            <input type='password' name='password' id='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                            <p className='text-danger'>{errors.password && errors.password}</p>
                        </div>

                        <div className='fields'>
                            <label htmlFor='password'>Confirm Password</label>
                            <input type='password' name='cpassword' id='cpassword' placeholder='Password' onChange={(e) => setCpassword(e.target.value)} />
                            <p className='text-danger'>{errors.cpassword && errors.cpassword}</p>
                        </div>

                        <div className='fields mt-2'>
                            <input type='checkbox' id='check' />
                            <span>&nbsp;Remember me</span>
                        </div>

                        <div className='fields'>
                            <button>Login</button>
                        </div>

                        <div className='create mt-4 text-center'>
                            <Link to='/' className='nav-link'>
                                <p>Already have account<b>Login</b></p>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register