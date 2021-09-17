import { useHistory } from "react-router-dom";

export const Logout = () => {
    let history = useHistory();

    function handleLogOut() {
        sessionStorage.setItem("app_user_id", '');
        sessionStorage.clear();
        history.push("/login");
    }

    return (
        <button type="button" onClick={handleLogOut}>
            Logout
        </button>
    );
}