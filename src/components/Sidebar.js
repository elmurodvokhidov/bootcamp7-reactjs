import { Form } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

function AllCollapseExample() {
    return (
        <Accordion className='pt-3' style={{ width: "500px" }}>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Telefonlar</Accordion.Header>
                <Accordion.Body>
                    <Form>
                        <Form.Check
                            type="checkbox"
                            id="iphone"
                            label="Iphone"
                        />

                        <Form.Check
                            type="checkbox"
                            id="samsung"
                            label="Samsung"
                        />
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Telivizorlar</Accordion.Header>
                <Accordion.Body>
                    <Form>
                        <Form.Check
                            type="checkbox"
                            id="shivaki"
                            label="Shivaki"
                        />

                        <Form.Check
                            type="checkbox"
                            id="lg"
                            label="Lg"
                        />
                    </Form>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default AllCollapseExample;