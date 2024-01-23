import { useContext, useEffect } from "react";
import { ContextData } from "../context/Context";
import { Outlet } from "react-router-dom";
import ProfileSidebar from "../components/ProfileSidebar";

function Profile() {
    const {
        currentUser,
        navigate,
    } = useContext(ContextData);

    useEffect(() => {
        if (!currentUser) navigate("/");
    }, [currentUser, navigate]);

    return (
        <div className="profile container py-5 d-flex justify-content-between" style={{ gap: "150px" }}>
            <ProfileSidebar />

            <div className="w-75">
                <Outlet />
            </div>
        </div>
    )
}

export default Profile