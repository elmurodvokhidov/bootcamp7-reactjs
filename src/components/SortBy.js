import Form from 'react-bootstrap/Form';

function SortBy() {
    return (
        <Form.Select aria-label="Default select example" style={{width: "120px", padding: "14px"}}>
            <option>Sort by</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    );
}

export default SortBy;