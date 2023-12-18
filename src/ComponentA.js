import React, { useContext } from 'react'
import { ContextAPI } from './context/context'

function ComponentA() {
    const { abc, data } = useContext(ContextAPI);

    return (
        <div>1 {abc}</div>
    )
}

export default ComponentA