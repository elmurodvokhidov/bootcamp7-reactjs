import Card from "../assets/Card"

function SectionTop() {
    return (
        <div className="s2_top">
            <h1 className="title">Специальные предложения</h1>
            <div className="s2_wrapper">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default SectionTop