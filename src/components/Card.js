import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaCartShopping, FaRegHeart } from 'react-icons/fa6';
import { IoEyeOutline } from "react-icons/io5";

function CardComponent() {
    return (
        <Card className='customCard col' style={{ width: '18rem' }}>
            <header variant="top">
                <Card.Img src="https://olcha.uz/image/266x266/products/supplier/stores/1/2023-09-13/KVD28D7GUC2bz9XYnFnNNWVXcWYaJJ8YLFUEUagp2Obr0bilgYH38sYcUKH2.jpg" />
                <div className="cardModal">
                    <button><IoEyeOutline /></button>
                    {/* <FaHeart /> */}
                    <button><FaRegHeart /></button>
                </div>
            </header>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                    <Card.Title>450$ <del>500$</del></Card.Title>
                    <Button className='mx-3' variant="primary"><FaCartShopping /></Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default CardComponent;