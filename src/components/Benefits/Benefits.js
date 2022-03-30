import { CheckCircleIcon } from '@heroicons/react/solid';
import React from 'react';


const Benefits = (props) => {


    return (
        <p className='flex'><CheckCircleIcon className='w-6 h-6  mr-1 text-green-500 hover:text-red-600'></CheckCircleIcon> {props.benefit}</p>
    );
};

export default Benefits;