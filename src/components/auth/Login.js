import React from "react"
import { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { authApi } from "./authSettings"
// import "./Auth.css"


export const Login = props => {
    const invalidDialog = React.createRef()
    const [loginUser, setLoginUser] = useState({ email: "" , password: ""})
    const history = useHistory()
    
    const handleInputChange = (event) => {
        const newUser = { ...loginUser }
        newUser[event.target.id] = event.target.value
        setLoginUser(newUser)
    }
    
    
    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`${authApi.localApiBaseUrl}/login`, {
            method: "POST",
                headers: {
                "Content-Type": "application/json",
                    "Accept": "application/json"
            },
            body: JSON.stringify(loginUser)
        })
            .then(res => res.json())
            .then(exists => {
                if (exists) {
                    sessionStorage.setItem("app_user_id", exists.token)
                        history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Level Up</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus
                            value={loginUser.email}
                            onChange={handleInputChange} />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            required autoFocus
                            value={loginUser.password}
                            onChange={handleInputChange} />
                    </fieldset>
                    <fieldset style={{
                        textAlign: "center"
                    }}>
                        <button className="btn btn-1 btn-sep icon-send" type="submit">Sign In</button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}