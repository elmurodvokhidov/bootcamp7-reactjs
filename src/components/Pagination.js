import { useContext } from "react";
import { Link } from "react-router-dom"
import { ContextData } from "../context/Context";

function Pagination() {
    const {
        products,
        perPage,
        currentPage,
        setCurrentPage,
    } = useContext(ContextData);

    const pageNumbers = [];

    for (let i = 1; i < Math.ceil(products.length / perPage); i++) {
        pageNumbers.push(i);
    };

    // Previous va Next funksiyalari
    function handleClick(functionType) {
        if (functionType === "prev" && currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
        else if (functionType === "next" && currentPage < pageNumbers.length) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <nav aria-label="Page navigation example" className="d-flex justify-content-center mt-4">
            <ul className="pagination">
                <li onClick={() => handleClick("prev")} className="page-item"><Link className="page-link">Previous</Link></li>
                {
                    pageNumbers.map((number, index) => (
                        <li onClick={() => setCurrentPage(number)} key={index} className="page-item"><Link className="page-link">{number}</Link></li>
                    ))
                }
                <li onClick={() => handleClick("next")} className="page-item"><Link className="page-link">Next</Link></li>
            </ul>
        </nav>
    )
}

export default Pagination