import { useContext } from "react"
import { ContextData } from "../context/Context"

function ProfileStatus() {
    const {
        currentUser
    } = useContext(ContextData);

    return (
        <div className="profileStatus">
            <h1>Foydalanuvchi ma'lumotlari</h1>
            <div className="infoBox mt-4 d-flex flex-column gap-3 fs-5">
                <div className="info d-flex">
                    <span className="w-100 text-secondary">Id raqami:</span>
                    <span>{currentUser.id}</span>
                </div>

                <div className="info d-flex">
                    <span className="w-100 text-secondary">Foydalanuvchi ismi:</span>
                    <span>{currentUser.username}</span>
                </div>

                <div className="info d-flex">
                    <span className="w-100 text-secondary">Foydalanuvchi paroli:</span>
                    <span>{currentUser.password}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileStatus