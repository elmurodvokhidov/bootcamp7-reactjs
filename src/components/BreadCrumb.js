import { Link, useLocation } from "react-router-dom"

function BreadCrumb() {
    const location = useLocation();
    const link = [];
    const crumbs = location.pathname.split("/")
        .filter(crumb => crumb !== "")
        .map((crumb, index) => {
            link.push("/" + crumb)
            return (
                <h4 key={index} className="crumb">
                    <Link to={link.join("")}>{crumb}</Link>
                </h4>
            )
        });

    return (
        <div className="breadCrumb container">{crumbs} </div>
    )
}

export default BreadCrumb