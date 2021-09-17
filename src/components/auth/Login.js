// import React, { useState } from "react"
// import { Link, useHistory } from "react-router-dom";
// import { authApi, userStorageKey } from "./authSettings"
// // import "./Login.css"


// export const Login = () => {
//     const [loginUser, setLoginUser] = useState({ email: "" , password: ""})
//     const [existDialog, setExistDialog] = useState(false)
//     const password = React.createRef();
//     const history = useHistory()

//     const handleInputChange = (event) => {
//         const newUser = { ...loginUser }
//         newUser[event.target.id] = event.target.value
//         setLoginUser(newUser)
//     }


//     const existingUserCheck = () => {
//         return fetch(`${authApi.localApiBaseUrl}/${authApi.endpoint}?email=${loginUser.email}`)
//             .then(res => res.json())
//             .then(user => user.length ? user[0] : false)
//     }

//     const handleLogin = (e) => {
//         e.preventDefault()

//         existingUserCheck()
//             .then(exists => {
//                 if (exists) {
//                     sessionStorage.setItem(userStorageKey, exists.id)
//                     history.push("/")
//                 } else {
//                     setExistDialog(true)
//                 }
//             })
//     }

//     return (
//         <main className="container--login">
//             <dialog className="dialog dialog--auth" open={existDialog}>
//                 <div>User does not exist</div>
//                 <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
//             </dialog>
//             <section className="login">
//                 <form className="form--login" onSubmit={handleLogin}>
//                     <h1 className="login--header">Watch This</h1>
//                     <h3 className="pleaseSignIn">Please sign in</h3>
//                     <fieldset className="login--fieldset">
//                         <label className="email--label" htmlFor="inputEmail">Email address  </label>
//                         <input type="email"
//                             id="email"
//                             className="form-control"
//                             placeholder="Email address"
//                             required autoFocus
//                             value={loginUser.email}
//                             onChange={handleInputChange} />
//                     </fieldset>
//                     <fieldset>
//                         <label htmlFor="inputPassword"> Password </label>
//                         <input
//                             ref={password}
//                             type="password"
//                             id="password"
//                             className="form-control"
//                             placeholder="Password"
//                             value={loginUser.password}
//                             required autoFocus
//                             onChange={handleInputChange}
//                         />
//                     </fieldset>
//                     <fieldset className="login--fieldset">
//                         <button type="submit" className="signInButton">
//                             Sign in
//                         </button>
//                     </fieldset>
//                 </form>
//                 <div className="registerLink">
//                     <Link to="/register">Register for an account</Link>
//                 </div>
//             </section>
//         </main>
//     )
// }


import React from "react"
import { Link } from "react-router-dom"
// import "./Auth.css"
import { useHistory } from "react-router"


export const Login = props => {
    const email = React.createRef()
    const password = React.createRef()
    const invalidDialog = React.createRef()
    const history = useHistory()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                email: email.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then((res) => {
                if ("valid" in res) {
                    sessionStorage.setItem("app_user_id", res.token);
                    history.push("/");
                } else {
                    invalidDialog.current.showModal();
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
                    <h1>Watch This</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email" id="email" className="form-control" placeholder="Email address" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" id="password" className="form-control" placeholder="Password" required />
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