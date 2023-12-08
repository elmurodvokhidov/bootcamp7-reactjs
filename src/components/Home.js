import Box from "../assets/Box"
import Impuls from "../assets/Impuls"
import Footer from "./Footer"
import Navbar from "./Navbar"
import SectionTop from "./SectionTop"

function Home() {
    return (
        <div className="container">
            <Navbar />

            <div className="section2">
                <SectionTop />

                <div className="s2_boxes">
                    <Box foo={true} />
                    <Box foo={false} />
                </div>

                <div className="s2_impuls">
                    <Impuls />
                    <Impuls />
                    <Impuls />
                    <Impuls />
                    <Impuls />
                    <Impuls />
                    <Impuls />
                    <Impuls />
                    <Impuls />
                    <Impuls />
                    <Impuls />
                    <Impuls />
                </div>

                <SectionTop />
            </div>

            <Footer />
        </div>
    )
}

export default Home