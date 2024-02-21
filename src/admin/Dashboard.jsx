import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

function Dashboard() {
    const { isLoggedIn } = useSelector(state => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/admin-panel");
        };
    }, [isLoggedIn]);

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard