import { useHistory } from "react-router-dom";

export const Logout = () => {
    let history = useHistory();

    function handleLogOut() {
        sessionStorage.setItem("app_user_id", '');
        sessionStorage.clear();
        history.push("/login"); // whichever component you want it to route to
    }

    return (
        <button type="button" onClick={handleLogOut}>
            Logout
        </button>
    );
}