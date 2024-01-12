import { useContext } from 'react';
import { Form } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { ContextData } from '../context/Context';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
    return `${value}°C`;
}

function AllCollapseExample() {
    const {
        setCustomFilter,
        value,
        setValue
    } = useContext(ContextData);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Form>
            <h5>Narx:</h5>
            <Box sx={{ width: 300 }} style={{ margin: "0 auto 15px" }}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    max={2000}
                    min={0}
                />
            </Box>

            <Accordion className='pt-3' style={{ width: "350px" }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Barchasi</Accordion.Header>
                    <Accordion.Body>
                        <div className='d-flex align-items-center justify-content-start gap-1'>
                            <input defaultChecked value={""} onChange={(e) => setCustomFilter(e.target.value)} type="radio" name="filter" id="all" />
                            <label htmlFor="all">Barcha mahsulotlar</label>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                    <Accordion.Header>Telefonlar</Accordion.Header>
                    <Accordion.Body>
                        <div className='d-flex align-items-center justify-content-start gap-1'>
                            <input value={"iphone"} onChange={(e) => setCustomFilter(e.target.value)} type="radio" name="filter" id="iphone" />
                            <label htmlFor="iphone">Iphone</label> <br />
                        </div>

                        <div className='d-flex align-items-center justify-content-start gap-1'>
                            <input value={"samsung"} onChange={(e) => setCustomFilter(e.target.value)} type="radio" name="filter" id="samsung" />
                            <label htmlFor="samsung">Samsung</label>
                        </div>

                        <div className='d-flex align-items-center justify-content-start gap-1'>
                            <input value={"xiaomi"} onChange={(e) => setCustomFilter(e.target.value)} type="radio" name="filter" id="xiaomi" />
                            <label htmlFor="xiaomi">Xiaomi</label>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                    <Accordion.Header>Telivizorlar</Accordion.Header>
                    <Accordion.Body>
                        <div className='d-flex align-items-center justify-content-start gap-1'>
                            <input value={"shivaki"} onChange={(e) => setCustomFilter(e.target.value)} type="radio" name="filter" id="shivaki" />
                            <label htmlFor="shivaki">Shivaki</label> <br />
                        </div>

                        <div className='d-flex align-items-center justify-content-start gap-1'>
                            <input value={"lg"} onChange={(e) => setCustomFilter(e.target.value)} type="radio" name="filter" id="lg" />
                            <label htmlFor="lg">Lg</label>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                    <Accordion.Header>Noutbuklar</Accordion.Header>
                    <Accordion.Body>
                        <div className='d-flex align-items-center justify-content-start gap-1'>
                            <input value={"lenovo"} onChange={(e) => setCustomFilter(e.target.value)} type="radio" name="filter" id="lenovo" />
                            <label htmlFor="lenovo">Lenovo</label> <br />
                        </div>

                        <div className='d-flex align-items-center justify-content-start gap-1'>
                            <input value={"hp"} onChange={(e) => setCustomFilter(e.target.value)} type="radio" name="filter" id="hp" />
                            <label htmlFor="hp">Hp</label>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Form >
    );
}

export default AllCollapseExample;