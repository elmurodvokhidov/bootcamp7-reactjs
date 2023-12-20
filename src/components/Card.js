import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaCartShopping, FaRegHeart } from 'react-icons/fa6';
import { IoEyeOutline } from "react-icons/io5";
import calcDis from "calculate-discount-hojiakbar";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContextData } from '../context/Context';

function CardComponent({ item }) {
    const { addToCart } = useContext(ContextData);

    return (
        <Card className='customCard col' style={{ width: '18rem' }}>
            <header variant="top">
                <Card.Img src={item.img} />
                <div className="cardModal">
                    <Link to={item.id}><IoEyeOutline /></Link>
                    {/* <FaHeart /> */}
                    <button><FaRegHeart /></button>
                </div>
            </header>
            <Card.Body>
                <Card.Title>{item.title.length > 20 ? item.title.slice(0, 20) + "..." : item.title}</Card.Title>
                <Card.Text>
                    {
                        item.description.length > 80 ? item.description.slice(0, 80) + "..." : item.description
                    }
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <Card.Title>{calcDis(item.price, item.discount)}$ <del>{item.price}$</del></Card.Title>
                    <Button onClick={() => addToCart(item)} className='mx-3' style={{ background: "#8112FA" }}><FaCartShopping /></Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;