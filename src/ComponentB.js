import React, { useContext } from 'react'
import { ContextAPI } from './context/context'

function ComponentB() {
    const { data } = useContext(ContextAPI);
    return (
        <div>2 {data}</div>
    )
}

export default ComponentB