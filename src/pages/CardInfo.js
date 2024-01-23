import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContextData } from "../context/Context";
import axios from "axios";

function CardInfo() {
    const {
        handleEdit,
        handleDelete,
        currentUser,
    } = useContext(ContextData);
    const { id } = useParams();
    const [targetCard, setTargetCard] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:5000/products/${id}`)
            .then(res => setTargetCard(res.data))
            .catch(err => console.log(err.response.data))
    }, [id]);

    return (
        <div className="card w-50 container align-items-center gap-5 my-5">
            <input type="checkbox" name="autoFocus" id="autoFocus" autoFocus={true} />
            <img src={targetCard.img} className="card-img-top w-50" alt={targetCard.title} />
            <div className="card-body">
                <h1 className="card-title">{targetCard.title}</h1>
                <p className="card-text fs-5">{targetCard.description}</p>
                <footer className="d-flex align-items-center justify-content-between">
                    <p className="card-text fs-5"><small className="text-body-secondary">Create at {new Date().getMinutes() - targetCard.createdAt} mins ago</small></p>
                    {
                        targetCard.author?.id === currentUser.id ?
                            <div className="btn-group">
                                <button className="btn btn-success" onClick={() => handleEdit(targetCard)}>Edit</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(id)}>Delete</button>
                            </div>
                            : null
                    }
                </footer>
            </div>
        </div>
    )
}

export default CardInfo