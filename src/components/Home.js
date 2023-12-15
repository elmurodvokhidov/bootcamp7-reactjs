import CardComponent from "./Card"
import SimpleSlider from "./SimpleSlider"

function Home() {
    return (
        <div className="home container py-5">
            <div className="sliderWrapper pt-3">
                <SimpleSlider />
            </div>
            <div className="row row-cols-1 row-cols-md-4 gap-5 justify-content-between pb-4 pt-3">
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
                <CardComponent />
            </div>
        </div>
    )
}

export default Home