import Styles from './Card.module.css'

export function Card({ name, orqaFon, addNum }) {

    return (
        <div className="card" style={{ backgroundColor: orqaFon }}>
            <figure><img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="user1" /></figure>
            <main>
                <h1 className={Styles.heading}>{name}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, nihil.</p>
            </main>
            <footer>
                <button onClick={addNum} className="btn btn-info">connect</button>
                <button className="btn btn-warning">rate</button>
            </footer>
        </div>
    )
}