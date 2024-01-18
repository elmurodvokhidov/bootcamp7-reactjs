import { useContext, useState } from "react"
import { ContextData } from "../context/Context"
import CardComponent from "../components/Card";
import Sidebar from "../components/Sidebar";
import { FiSearch } from "react-icons/fi";
import Form from 'react-bootstrap/Form';
import Pagination from "../components/Pagination";

function Product() {
    const {
        // products,
        search,
        setSearch,
        customFilter,
        value,
        pageProducts,
    } = useContext(ContextData);

    const [sortBy, setSortBy] = useState("default");

    const filteredProducts = pageProducts.filter(element => {
        const searchLowerCase = search.toLowerCase().trim();

        const titleMatch = element.title.toLowerCase().includes(searchLowerCase);
        const priceMatch = value[0] < element.price && element.price < value[1];
        const categoryMatch = element.category.includes(customFilter);

        return titleMatch && priceMatch && categoryMatch;
    });

    // const filteredProducts = pageProducts.filter(item => {
    //     const searchLowerCase = search.toLowerCase();

    //     return (
    //         Object.keys(item).some(key => {
    //             const value = item[key];

    //             if (typeof value === 'string' || typeof value === 'number') {
    //                 // Handle string or number properties
    //                 return value.toString().toLowerCase().includes(searchLowerCase);
    //             } else if (Array.isArray(value)) {
    //                 // Handle array properties (e.g., category)
    //                 return value.some(arrayItem => arrayItem.toString().toLowerCase().includes(searchLowerCase));
    //             }

    //             // Handle other types of properties as needed
    //             return false;
    //         }) &&
    //         item.category.includes(customFilter)
    //     );
    // });


    const sortProducts = (a, b) => {
        switch (sortBy) {
            case "cheap":
                return parseFloat(a.price) - parseFloat(b.price);
            case "expensive":
                return parseFloat(b.price) - parseFloat(a.price);
            case "bigDiscount":
                return parseFloat(b.discount) - parseFloat(a.discount);
            // case "highRating":
            //     return parseFloat(b.rating) - parseFloat(a.rating);
            default:
                return 0; // No sorting
        }
    };

    const sortedProducts = [...filteredProducts].sort(sortProducts);

    return (
        <div className="product">
            <div className="top mt-5 d-flex justify-content-between align-items-center" style={{ paddingRight: "40px" }}>
                <div className="p-2 mx-5 w-50 d-flex align-items-center gap-2 rounded-2" style={{ border: "1px solid silver" }}>
                    <label htmlFor="search"><FiSearch className="fs-2" style={{ color: "silver" }} /></label>
                    <input onChange={(e) => setSearch(e.target.value)} className="w-100 border-0" type="text" name="search" id="search" placeholder="Search any product..." style={{ outline: "none" }} />
                </div>
                <Form.Select
                    aria-label="Default select example"
                    style={{ width: "120px", padding: "14px" }}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="default">Sort by</option>
                    <option value="cheap">Cheap</option>
                    <option value="expensive">Expensive</option>
                    <option value="bigDiscount">Big Discount</option>
                    {/* <option value="highRating">High Rating</option> */}
                </Form.Select>
                <button className="btn btn-light fs-3">Barcha mahsulotlar: {sortedProducts.length}</button>
            </div>
            <div className="p-5 d-flex justify-content-between" style={{ gap: "150px" }}>
                <Sidebar />

                <div>
                    <div className="row row-cols-1 row-cols-md-4 justify-content-start w-100 gap-5 pb-4 pt-3">
                        {sortedProducts.length > 0 ? (
                            sortedProducts.map(item => (
                                <CardComponent item={item} key={item.id} />
                            ))
                        ) : (
                            <h1 className="w-100 text-center">Not found!</h1>
                        )}
                    </div>
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default Product