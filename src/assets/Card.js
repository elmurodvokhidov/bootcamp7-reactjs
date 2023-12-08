import GlobalBtn from "./globalbtn"

function Card() {
    return (
        <div className="s2_card">
            <figure><img src="./img/270-34.jpg" alt="table" /></figure>
            <h3>Парикмахерское кресло «Норм» гидравлическое</h3>
            <h2>9 900 ₽</h2>
            <GlobalBtn text={"Купить"} specialid={"card_btn"} />
        </div>
    )
}

export default Card