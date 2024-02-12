import { ImBin } from "react-icons/im";
import { FaPenToSquare } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export function Table({ foydalanuvchilar, dispatch }) {

    function deleteFunction(ism) {
        dispatch({ type: "DELETE", payload: ism });
    }

    console.log(foydalanuvchilar)

    return (
        <table className="border-2 w-[60%] text-left mt-10 mx-auto text-xl">
            <thead>
                <tr>
                    <th>T/r</th>
                    <th>Ism</th>
                    <th className="text-center">Familya</th>
                </tr>
            </thead>
            <tbody>
                {
                    foydalanuvchilar?.map((foydalanuvchi, index) => (
                        <tr className={`${foydalanuvchi?.rang ? "bg-slate-200" : "white"} border-2`} key={index}>
                            <td>{index + 1}</td>
                            <td>{foydalanuvchi?.ism}</td>
                            <td>{foydalanuvchi?.familya}</td>
                            <td>
                                <div className="flex gap-14">
                                    <NavLink to={`edit/${foydalanuvchi.id}`} className="text-green-600 border-2 bg-slate-300 rounded px-2"><FaPenToSquare /></NavLink>
                                    <button onClick={() => deleteFunction(foydalanuvchi?.id)} className="text-red-600 border-2 bg-slate-300 rounded px-2"><ImBin /></button>
                                </div>
                            </td>
                        </tr>))
                }
            </tbody>
        </table>
    )
};