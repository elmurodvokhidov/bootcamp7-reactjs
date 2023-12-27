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
        <div className="home container py-5 basket">
            <div className="scrollBar">
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
                            basket.length > 0 ?
                                basket.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td><img style={{ width: "120px" }} src={item.img} alt={item.title} /></td>
                                        <td>{item.title}</td>
                                        <td>{item.description.length > 20 ? item.description.slice(0, 20) + "..." : item.description}</td>
                                        <td>{Math.floor(calcDis(item.price, item.discount) * item.count)}$</td>
                                        <td>
                                            <div className="d-flex flex-row justify-content-center align-items-center gap-3">
                                                <button onClick={() => decrement(item)} className="btn btn-secondary"><FaMinus /></button>
                                                <span>{item.count}</span>
                                                <button onClick={() => increment(item)} className="btn btn-success"><FaPlus /></button>
                                            </div>
                                        </td>
                                        <td><button onClick={() => deleteProductFromCart(item.id)} className="btn btn-danger"><MdDelete /></button></td>
                                    </tr>
                                )) : <tr style={{ height: "380px" }}><td colSpan={10} style={{ color: "red", fontSize: "25px" }}>Savatda mahsulot topilmadi!</td></tr>
                        }
                    </tbody>
                </Table>
            </div>

            <footer className="d-flex align-items-start justify-content-between">
                <div className="promocode">
                    <input className="py-2 px-3" type="text" name="promocode" id="promocode" placeholder="Enter your promocode..." />
                    <label className="btn btn-dark" htmlFor="promocode">Enter</label>
                </div>

                <div className="subtotal">
                    <div className="d-flex flex-column gap-2">
                        <div className="item">
                            <h3>Jami:</h3>
                            <h3>{basket.length > 0 ? Math.floor(basket.reduce((amount, item) => amount + (calcDis(item.price, item.discount) * item.count), 0)) : "0"}$</h3>
                        </div>
                        <div className="item">
                            <h5>Promocode:</h5>
                            <h5>No</h5>
                        </div>
                        <div className="item">
                            <h5>Delivery:</h5>
                            <h5>0$</h5>
                        </div>
                    </div>
                    <button className="btn btn-dark w-100 mt-4 p-2">Buyurtma berish</button>
                </div>
            </footer>
        </div>
    )
}

export default Basket