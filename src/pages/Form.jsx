import { useState } from "react";

export function Form({ dispatch }) {
    const [newUser, setNewUser] = useState();

    function addFunction(e) {
        e.preventDefault();
        dispatch({ type: "CREATE", payload: newUser });
    };

    return (
        <form className="w-[50%] bg-gray-300 mt-20 mx-auto text-2xl px-10 py-14">
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="ism">Ism</label>
                <input onInput={(e) => setNewUser({ ...newUser, ism: e.target.value })} className="outline-none rounded px-2 py-1" type="text" name="ism" id="ism" placeholder="Salim" />
            </div>
            <div className="flex flex-col gap-2 mb-5">
                <label htmlFor="familya">Familya</label>
                <input onInput={(e) => setNewUser({ ...newUser, familya: e.target.value })} className="outline-none rounded px-2 py-1" type="text" name="familya" id="familya" placeholder="Salimov" />
            </div>

            <button onClick={(e) => addFunction(e)} className="bg-blue-400 px-10 py-2 mt-12 text-white rounded">Qo'shish</button>
        </form>
    )
};