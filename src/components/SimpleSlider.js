import Slider from "react-slick"

function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 5000
    };

    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img style={{ width: '100%' }} src="./img/slider1.png" alt="..." />
                </div>
                <div>
                    <img style={{ width: '100%' }} src="./img/slider2.jpg" alt="..." />
                </div>
                <div>
                    <img style={{ width: '100%' }} src="./img/slider3.png" alt="..." />
                </div>
                <div>
                    <img style={{ width: '100%' }} src="./img/slider4.jpg" alt="..." />
                </div>
                <div>
                    <img style={{ width: '100%' }} src="./img/slider5.png" alt="..." />
                </div>
                <div>
                    <img style={{ width: '100%' }} src="./img/slider6.png" alt="..." />
                </div>
            </Slider>
        </div>
    )
}

export default SimpleSlider