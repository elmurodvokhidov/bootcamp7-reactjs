import { useContext, useEffect } from "react";
import { ContextData } from "../context/Context";
import { useNavigate } from "react-router-dom";
import ProfileSidebar from "../components/ProfileSidebar";

function Profile() {
    const {
        user,
        navigate,
    } = useContext(ContextData);

    useEffect(() => {
        if (!user) navigate("/");
    }, [user, navigate]);

    return (
        <div className="profile container pt-5 d-flex justify-content-between" style={{ gap: "150px" }}>
            <ProfileSidebar />

            <div>

            </div>
        </div>
    )
}

export default Profile