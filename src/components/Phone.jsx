import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Phone = () => {
    const phone = useLoaderData();
    console.log('This is my Phone',phone);
    return (
        <div>
            <h1>{phone.name}</h1>
            <h1><img src={phone.image} alt="" /></h1>
        </div>
    );
};

export default Phone;