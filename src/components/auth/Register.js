// import React, { useState } from "react"
// import { useHistory } from "react-router-dom"
// import { authApi, userStorageKey } from "./authSettings"
// // import "./Login.css"
// // import "./Register.css"

// export const Register = () => {

//     const [registerUser, setRegisterUser] = useState({ firstName: "", lastName: "", email: "" , password: ""})
//     const [conflictDialog, setConflictDialog] = useState(false)

//     const history = useHistory()

//     const handleInputChange = (event) => {
//         const newUser = { ...registerUser }
//         newUser[event.target.id] = event.target.value
//         setRegisterUser(newUser)
//     }

//     const existingUserCheck = () => {

//         return fetch(`${authApi.localApiBaseUrl}/${authApi.endpoint}?email=${registerUser.email}`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             }
//         }
//         )
//             .then(res => res.json())
//             .then(user => !!user.length)
//     }

//     const handleRegister = (e) => {
//         e.preventDefault()

//         existingUserCheck()
//             .then((userExists) => {
//                 if (!userExists) {
//                     fetch(`${authApi.localApiBaseUrl}/${authApi.endpoint}`, {
//                         method: "POST",
//                         headers: {
//                             "Content-Type": "application/json",
//                             'Accept': 'application/json'
//                         },
//                         body: JSON.stringify({
//                             email: registerUser.email,
//                             name: `${registerUser.firstName} ${registerUser.lastName}`,
//                             password: registerUser.password
//                         })
//                     })
//                         .then(res => res.json())
//                         .then(createdUser => {
//                             if (createdUser.hasOwnProperty("id")) {
//                                 sessionStorage.setItem(userStorageKey, createdUser.id)
//                                 history.push("/")
//                             }
//                         })
//                 }
//                 else {
//                     setConflictDialog(true)
//                 }
//             })

//     }

//     return (
//         <main className="container--register" style={{ textAlign: "center" }}>

//             <dialog className="dialog dialog--password" open={conflictDialog}>
//                 <div>Account with that email address already exists</div>
//                 <button className="button--close" onClick={e => setConflictDialog(false)}>Close</button>
//             </dialog>

//             <form className="register" onSubmit={handleRegister}>
//                 <h1 className="register--header">Please Register for Watch This</h1>
//                 <fieldset className="register--fieldset">
//                     <label htmlFor="firstName"> First Name </label>
//                     <input type="text" name="firstName" id="firstName" className="form-control" placeholder="First name" required autoFocus value={registerUser.firstName} onChange={handleInputChange} />
//                 </fieldset>
//                 <fieldset>
//                     <label htmlFor="lastName"> Last Name </label>
//                     <input type="text" name="lastName" id="lastName" className="form-control" placeholder="Last name" required value={registerUser.lastName} onChange={handleInputChange} />
//                 </fieldset>
//                 <fieldset>
//                     <label htmlFor="inputEmail"> Email address </label>
//                     <input type="email" name="email" id="email" className="form-control" placeholder="Email address" required value={registerUser.email} onChange={handleInputChange} />
//                 </fieldset>
//                 <fieldset>
//                     <label htmlFor="inputPassword"> Password </label>
//                     <input type="password" name="password" id="password" className="form-control" placeholder="Password" required />
//                 </fieldset>
//                 <fieldset>
//                     <button className="register--signin" type="submit"> Sign in </button>
//                 </fieldset>
//             </form>
//         </main>
//     )
// }


import React from "react"
import { Link } from "react-router-dom"
// import "./Auth.css"

export const Register = (props) => {
    const firstName = React.createRef()
    const lastName = React.createRef()
    const email = React.createRef()
    const password = React.createRef()
    const verifyPassword = React.createRef()
    const passwordDialog = React.createRef()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": email.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "email": email.current.value,
                "password": password.current.value
            }

            return fetch("http://127.0.0.1:8000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(res => {
                    if ("token" in res) {
                        sessionStorage.setItem("app_user_id", res.token)
                        props.history.push("/")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register an account</h1>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                </fieldset>
                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button className="btn btn-1 btn-sep icon-send" type="submit">Register</button>
                </fieldset>
            </form>
            <section className="link--register">
                Already registered? <Link to="/login">Login</Link>
            </section>
        </main>
    )
}