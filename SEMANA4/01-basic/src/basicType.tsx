requestAnimationFrame

import React, {useState} from "react";
import useStatus from "./hooks/useStatus";

const Status= () => {
    const {active, changevalue} = useStatus();

    return (
        <>
            <h3 className='text-2xl'>Estado: <small className='font-bold'>{ active ? 'Activo' : 'Inactivo' }</small></h3>
            <div>
                <button 
                    onClick={() => changevalue(true)}
                    className='p-2 bg-green-500 rounded-xl w-20 mx-2 text-white'>Activo</button>
                <button 
                    onClick={() => changevalue(false)}
                    className='p-2 bg-gray-500 rounded-xl w-20 mx-2 text-white'>Inactivo</button>
            </div>
        </>
    )
}


export default Status
