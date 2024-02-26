import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { allProductSuccess, productFailure, productStart, productSuccess } from "../redux/slice/productSlice";
import AuthServise from "../redux/api/auth";
import { Toast } from "../utils/SweetAlert";

function Dashboard() {
    const { isLoggedIn } = useSelector(state => state.auth);
    const { products } = useSelector(state => state.product);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [newProduct, setNewProduct] = useState({
        title: "",
        description: "",
        category: "",
        color: "",
        price: "",
        discount: "",
        img: "example.png",
    });

    function getInputValue(e) {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        })
    }

    async function createHandle(e) {
        e.preventDefault();
        dispatch(productStart());
        try {
            const { data } = await AuthServise.createNewProduct(newProduct);
            dispatch(productSuccess(data));
            await Toast.fire({
                icon: "success",
                title: data.message
            });
        } catch (error) {
            dispatch(productFailure(error.response?.data.message));
            await Toast.fire({
                icon: "error",
                title: error.response?.data.message || error.message
            });
        }
    }

    const getAllProducts = async () => {
        dispatch(productStart());
        try {
            const { data } = await AuthServise.getAllProducts();
            dispatch(allProductSuccess(data));
        } catch (error) {
            dispatch(productFailure(error.response?.data.message));
        }
    }

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/admin-panel");
        };

        getAllProducts();
    }, [isLoggedIn]);

    return (
        <div>
            <form>
                <input value={newProduct.title} onChange={(e) => getInputValue(e)} type="text" name="title" id="title" placeholder="title" /> <br /> <br />
                <input value={newProduct.description} onChange={(e) => getInputValue(e)} type="text" name="description" id="description" placeholder="description" /> <br /> <br />
                <input value={newProduct.category} onChange={(e) => getInputValue(e)} type="text" name="category" id="category" placeholder="category" /> <br /> <br />
                <input onChange={(e) => getInputValue(e)} type="color" name="color" id="color" placeholder="color" /> <br /><br />
                <input value={newProduct.price} onChange={(e) => getInputValue(e)} type="number" name="price" id="price" placeholder="price" /> <br /><br />
                <input value={newProduct.discount} onChange={(e) => getInputValue(e)} type="number" name="discount" id="discount" placeholder="discount" /> <br /><br />
                <input onChange={(e) => getInputValue(e)} type="file" name="img" id="img" />

                <button onClick={createHandle}>Create</button>
            </form>

            <div className="flex items-start gap-12">
                {
                    products ? products.map((product, index) => (
                        <div className="w-[25%] border-2" key={index}>
                            <h1>{product.title}</h1>
                            <h1>{product.description}</h1>
                            <h1>{product.price}</h1>
                            <h1>{product.category}</h1>
                            <h1>{product.discount}</h1>
                            <h1 className="w-8 h-8" style={{ background: product.color }}></h1>
                        </div>
                    )) : 
                    <><h1>Loading...</h1></>
                }
            </div>
        </div>
    )
}

export default Dashboard