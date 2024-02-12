import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Edit({ dispatch, foydalanuvchilar }) {
    const [newUser, setNewUser] = useState({
        ism: "",
        familya: ""
    });
    const { id } = useParams();
    const targetUser = foydalanuvchilar.filter(foydalanuvchi => foydalanuvchi.id === id)[0];

    useEffect(() => {
        setNewUser(targetUser);
    }, [setNewUser]);

    function editFunction(e) {
        e.preventDefault();
        dispatch({ type: "EDIT", payload: newUser });
    };

    return (
        <form className="w-[50%] bg-gray-300 mt-20 mx-auto text-2xl px-10 py-14">
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="ism">Ism</label>
                <input onInput={(e) => setNewUser({ ...newUser, ism: e.target.value })} value={newUser.ism} className="outline-none rounded px-2 py-1" type="text" name="ism" id="ism" placeholder="Salim" />
            </div>
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="familya">Familya</label>
                <input onInput={(e) => setNewUser({ ...newUser, familya: e.target.value })} value={newUser.familya} className="outline-none rounded px-2 py-1" type="text" name="familya" id="familya" placeholder="Salimov" />
            </div>

            <button onClick={(e) => editFunction(e)} className="bg-blue-400 px-10 py-2 mt-12 text-white rounded">Tahrirlash</button>
        </form>
    )
}

export default Edit