import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import getUID from "uid-generator-package";

export const ContextData = React.createContext();

export function ContextFunction({ children }) {
    const [user, setUser] = useState(null);

    const [loginModal, setLoginModal] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    function handleDropdown() {
        setDropdown(!dropdown);
    };

    function handleLoginModal() {
        setLoginModal(!loginModal);
    };

    // Barcha mahsulotlar
    const [products, setProducts] = useState([]);

    // Hozirgi page raqami
    const [currentPage, setCurrentPage] = useState(1);

    // Har bir page-da nechtadan mahsulot bo'lishi
    const [perPage, setPerPage] = useState(6);

    // Hozirgi mahsulotlarni ko'rsatish
    const indexOfLastProduct = currentPage * perPage;
    const indexOfFirstProduct = indexOfLastProduct - perPage;
    const pageProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Barcha mahsulotlarni qayta olish funksiyasi
    // function getProducts() {
    //     setProducts(JSON.parse(localStorage.getItem("products")) || []);
    // };

    // Korzinkadagi barcha mahsulotlar
    const [basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || []);

    // Korzinkadagi barcha mahsulotlarni qayta olish funksiyasi
    function getBasketProducts() {
        setBasket(JSON.parse(localStorage.getItem("basket")) || []);
    };

    // Like-dagi barcha mahsulotlar
    const [like, setLike] = useState(JSON.parse(localStorage.getItem("likes")) || []);

    // Like-dagi barcha mahsulotlarni qayta olish funksiyasi
    function getLikeProducts() {
        setLike(JSON.parse(localStorage.getItem("likes")) || [])
    };

    // Search state
    const [search, setSearch] = useState("");

    // Custom filter state
    const [customFilter, setCustomFilter] = useState("");

    // Slider state
    const [value, setValue] = useState([0, 2000]);

    // Input-lardan olingan barcha ma'lumotlar
    const [newProduct, setNewProduct] = useState({
        id: "",
        title: "",
        img: "",
        description: "",
        price: "",
        discount: "",
        status: true,
        count: 1,
        category: "",
        createdAt: "",
    });

    // Navigation hook
    const navigate = useNavigate();

    function handleClear() {
        setNewProduct({
            id: "",
            title: "",
            img: "",
            description: "",
            price: "",
            discount: "",
            status: true,
            count: 1,
            category: "",
            createdAt: "",
        });
    };

    // API-dan ma'lumot olish funksiyasi
    function getData() {
        axios.get("http://localhost:5000/products")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err.response.data))
    }

    useEffect(() => {
        getData();
    }, []);

    // Korzinkaga mahsulot qo'shish
    function addToCart(mahsulot) {
        if (mahsulot.status) {
            if (basket.filter(element => element.id === mahsulot.id).length === 0) {
                if (localStorage.getItem("basket")) {
                    // Agar localstorage-da mahsulot bo'lsa...
                    localStorage.setItem("basket", JSON.stringify([...basket, mahsulot]));
                }
                else {
                    // Agar localstorage-da mahsulot bo'lmasa...
                    localStorage.setItem("basket", JSON.stringify([mahsulot]));
                }
                getBasketProducts();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
            else {
                Swal.fire({
                    title: "Ogohlantirish!",
                    text: "Ushbu mahsulot allaqchon mavjud!",
                    icon: "warning"
                });
            }
        }
        else {
            Swal.fire({
                title: "Ogohlantirish!",
                text: "Afsuski ushbu mahsulot omborda mavjud emas!",
                icon: "warning"
            });
        }
    };

    // Korzinkadan mahsulot o'chirish
    function deleteProductFromCart(id) {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.setItem("basket", JSON.stringify(basket.filter(item => item.id !== id)));
                getBasketProducts();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });
    };

    function increment(mahsulot) {
        setBasket(basket.map(item => item.id === mahsulot.id ? { ...item, count: item.count + 1 } : item));
    };

    function decrement(mahsulot) {
        if (mahsulot.count !== 1) {
            setBasket(basket.map(item => item.id === mahsulot.id ? { ...item, count: item.count - 1 } : item));
        }
        else {
            deleteProductFromCart(mahsulot.id);
        }
    };

    // Like-ga mahsulot qo'shish
    function handleLike(item) {
        if (like.filter(element => element.id === item.id).length === 0) {
            if (localStorage.getItem("likes")) {
                // Agar mahsulot bo'lsa...
                localStorage.setItem("likes", JSON.stringify([...like, item]));
            } else {
                // Agar mahsulot bo'lmasa...
                localStorage.setItem("likes", JSON.stringify([item]));
            }
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
        }
        else {
            localStorage.setItem("likes", JSON.stringify(like.filter(i => i.id !== item.id)));
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
            });
        };
        getLikeProducts();
    };

    // Input-lardan ma'lumot olish
    function getInputValue(e) {
        setNewProduct({
            ...newProduct,
            [e.target.name]: e.target.value
        });
    };

    // Mahsulot qo'shish va tahrirlash funksiyasi
    function addFunction(e) {
        e.preventDefault();
        if (newProduct.id === "") {
            axios.post("http://localhost:5000/products", { ...newProduct, id: getUID(), createdAt: new Date().getMinutes() });
        }
        else {
            // Mahsulotni tahrirlash
            axios.put(`http://localhost:5000/products/${newProduct.id}`, newProduct);
        }
        getData();
        handleClear();
        navigate("product");
    };

    // Tahrirlash funksiyasi
    function handleEdit(product) {
        setNewProduct(product);
        navigate("profile");
    };

    // Mahsulot o'chirish funksiyasi
    function handleDelete(id) {
        axios.delete(`http://localhost:5000/products/${id}`);
        getData();
        navigate("product");
    };

    return (
        <ContextData.Provider value={{
            products,
            setProducts,
            addToCart,
            basket,
            deleteProductFromCart,
            increment,
            decrement,
            like,
            handleLike,
            search,
            setSearch,
            newProduct,
            getInputValue,
            addFunction,
            handleEdit,
            handleDelete,
            customFilter,
            setCustomFilter,
            value,
            setValue,
            currentPage,
            setCurrentPage,
            perPage,
            setPerPage,
            pageProducts,
            user,
            loginModal,
            dropdown,
            handleLoginModal,
            handleDropdown,
        }}>
            {children}
        </ContextData.Provider>
    )
};