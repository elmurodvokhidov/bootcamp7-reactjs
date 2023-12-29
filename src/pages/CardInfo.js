import { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextData } from "../context/Context";

function CardInfo() {
    const {
        products,
        handleEdit,
        handleDelete
    } = useContext(ContextData);
    const { id } = useParams();
    const targetCard = products.find(item => item.id === id);

    return (
        <div className="card w-50 container align-items-center gap-5 my-5">
            <input type="checkbox" name="autoFocus" id="autoFocus" autoFocus={true} />
            <img src={targetCard.img} className="card-img-top w-50" alt={targetCard.title} />
            <div className="card-body">
                <h1 className="card-title">{targetCard.title}</h1>
                <p className="card-text fs-5">{targetCard.description}</p>
                <footer className="d-flex align-items-center justify-content-between">
                    <p className="card-text fs-5"><small className="text-body-secondary">Create at {new Date().getMinutes() - targetCard.createdAt} mins ago</small></p>
                    <div className="btn-group">
                        <button className="btn btn-success" onClick={() => handleEdit(targetCard)}>Edit</button>
                        <button className="btn btn-danger" onClick={() => handleDelete(id)}>Delete</button>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default CardInfo