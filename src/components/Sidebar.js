import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { ContextData } from '../context/Context';

function AllCollapseExample() {
    const {
        setCustomFilter
    } = useContext(ContextData);

    return (
        <Form>
            <Accordion className='pt-3' style={{ width: "500px" }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Barchasi</Accordion.Header>
                    <Accordion.Body>
                        <Form.Check
                            type="radio"
                            id="all"
                            label="All"
                            name="filter"
                            checked={true}
                            onChange={() => setCustomFilter("")}
                        />
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Telefonlar</Accordion.Header>
                    <Accordion.Body>
                        <Form.Check
                            type="radio"
                            id="iphone"
                            label="Iphone"
                            name="filter"
                            onChange={(e) => setCustomFilter(e.target.id)}
                        />

                        <Form.Check
                            type="radio"
                            id="samsung"
                            label="Samsung"
                            name="filter"
                            onChange={(e) => setCustomFilter(e.target.id)}
                        />
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Telivizorlar</Accordion.Header>
                    <Accordion.Body>
                        <Form.Check
                            type="radio"
                            id="shivaki"
                            label="Shivaki"
                            name="filter"
                            onChange={(e) => setCustomFilter(e.target.id)}
                        />

                        <Form.Check
                            type="radio"
                            id="lg"
                            label="Lg"
                            name="filter"
                            onChange={(e) => setCustomFilter(e.target.id)}
                        />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Form>
    );
}

export default AllCollapseExample;