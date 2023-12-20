import { useContext } from "react"
import { Table } from "react-bootstrap"
import { ContextData } from "../context/Context"
import calcDis from "calculate-discount-hojiakbar";
import { MdDelete } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa6";

function Basket() {
    const {
        basket,
        deleteProductFromCart,
        increment,
        decrement
    } = useContext(ContextData);

    return (
        <div className="home container py-5">
            <Table striped className="text-center">
                <thead>
                    <tr>
                        <th>№</th>
                        <th>Rasmi</th>
                        <th>Nomi</th>
                        <th>Ma'lumot</th>
                        <th>Narxi</th>
                        <th>Soni</th>
                        <th>Holat</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        basket.map((item, index) => (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td><img style={{ width: "120px" }} src={item.img} alt={item.title} /></td>
                                <td>{item.title}</td>
                                <td>{item.description.length > 20 ? item.description.slice(0, 20) + "..." : item.description}</td>
                                <td>{calcDis(item.price, item.discount)}$</td>
                                <td>
                                    <div className="d-flex flex-row justify-content-center align-items-center gap-3">
                                        <button onClick={() => decrement(item)} className="btn btn-secondary"><FaMinus /></button>
                                        <span>{item.count}</span>
                                        <button onClick={() => increment(item)} className="btn btn-success"><FaPlus /></button>
                                    </div>
                                </td>
                                <td><button onClick={() => deleteProductFromCart(item.id)} className="btn btn-danger"><MdDelete /></button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Basket