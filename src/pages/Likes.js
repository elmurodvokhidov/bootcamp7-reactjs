import { useContext } from "react"
import { ContextData } from "../context/Context"
import CardComponent from "../components/Card";

function Likes() {
    const { like } = useContext(ContextData);

    return (
        <div className="home container py-5">
            <h1>Barcha yoqtirilgan mahsulotlar</h1>

            <div className="row row-cols-1 row-cols-md-4 gap-5 justify-content-left pb-4 pt-3 my-5">
                {
                    like.map(item => (
                        <CardComponent item={item} key={item.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Likes