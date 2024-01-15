import { useContext } from "react";
import { Link } from "react-router-dom"
import { ContextData } from "../context/Context";

function Pagination() {
    const {
        products,
        perPage,
        setCurrentPage,
    } = useContext(ContextData);

    const pageNumbers = [];

    for (let i = 1; i < Math.ceil(products.length / perPage); i++) {
        pageNumbers.push(i);
    };

    return (
        <nav aria-label="Page navigation example" className="d-flex justify-content-center mt-4">
            <ul className="pagination">
                <li className="page-item"><Link className="page-link">Previous</Link></li>
                {
                    pageNumbers.map((number, index) => (
                        <li onClick={() => setCurrentPage(number)} key={index} className="page-item"><Link className="page-link">{number}</Link></li>
                    ))
                }
                <li className="page-item"><Link className="page-link">Next</Link></li>
            </ul>
        </nav>
    )
}

export default Pagination