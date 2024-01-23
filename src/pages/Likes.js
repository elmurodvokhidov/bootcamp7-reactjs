import { useContext } from "react"
import { ContextData } from "../context/Context"
import CardComponent from "../components/Card";

function Likes() {
    const { like } = useContext(ContextData);

    return (
        <div className="likes home container py-5">
            <h2>Barcha yoqtirilgan mahsulotlar</h2>

            <div className="row row-cols-1 row-cols-md-4 gap-5 justify-content-left pb-4 pt-3 my-5">
                {
                    like.length > 0 ? like.map(item => (
                        <CardComponent item={item} key={item.id} />
                    )) : <h4 className="text-center w-100 my-5 text-danger">Yoqtirilgan mahsulot yo'q!</h4>
                }
            </div>
        </div>
    )
}

export default Likes