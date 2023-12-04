function Table({ val }) {
    function getUser(user) {
        console.log(user);
    };
    
    return (
        <tr>
            <td>{val.name}</td>
            <td>{val.age}</td>
            <td>{val.password}</td>
            <td><button onClick={() => getUser(val)}>get user</button></td>
        </tr>
    )
}

export default Table