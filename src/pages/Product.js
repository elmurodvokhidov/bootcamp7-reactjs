import { useContext } from "react"
import { ContextData } from "../context/Context"
import CardComponent from "../components/Card";
import Sidebar from "../components/Sidebar";
import SortBy from "../components/SortBy";
import { FiSearch } from "react-icons/fi";

function Product() {
    const {
        products,
        search,
        setSearch,
        customFilter
    } = useContext(ContextData);
    console.log(customFilter);

    const filteredProducts = products.filter(element =>
        // element.title.toLowerCase().includes(search.toLowerCase()) ||
        // element.price.includes(search) ||
        element.category.includes(customFilter)
    );

    return (
        <div className="product">
            <div className="top mt-5 d-flex justify-content-between align-items-center" style={{ paddingRight: "40px" }}>
                <div className="p-2 mx-5 w-50 d-flex align-items-center gap-2 rounded-2" style={{ border: "1px solid silver" }}>
                    <label htmlFor="search"><FiSearch className="fs-2" style={{ color: "silver" }} /></label>
                    <input onChange={(e) => setSearch(e.target.value)} className="w-100 border-0" type="text" name="search" id="search" placeholder="Search any product..." style={{ outline: "none" }} />
                </div>
                <SortBy />
                <button className="btn btn-light fs-3">Barcha mahsulotlar: {products.length}</button>
            </div>
            <div className="p-5 d-flex justify-content-between" style={{ gap: "150px" }}>
                <Sidebar />

                <div className="row row-cols-1 row-cols-md-4 gap-5 justify-content-left pb-4 pt-3" style={{ width: "fit-content" }}>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(item => (
                            <CardComponent item={item} key={item.id} />
                        ))
                    ) : (
                        <h1>Not found!</h1>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Product