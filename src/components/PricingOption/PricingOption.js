// import { CheckCircleIcon } from '@heroicons/reasct/solid';
import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benefits from '../Benefits/Benefits';

const PricingOption = (props) => {
    const { name, price, benefits } = props.option
    console.log(benefits)
    return (
        <div className=' bg-slate-100 p-5 rounded-lg'>

            <h1 className='text-2xl font-bold bg-indigo-300 rounded-lg p-4' >{name}</h1>

            <p className='font-bold text-4xl hover:text-red-500'>{price}/mo</p>


            {/* <p className='flex'><CheckCircleIcon className='w-6 h-6  mr-1 text-green-500'></CheckCircleIcon> Awesome Features</p> */}

            {
                benefits.map(benefit => <Benefits benefit={benefit}></Benefits>)
            }


            {/* button */}

            <button className='flex items-center bg-green-500 justify-center w-full mt-4 p-5 font-bold text-2xl rounded-lg'>Buy Now <ArrowCircleRightIcon className='w-5 h-5 ml-1 '></ArrowCircleRightIcon></button>



        </div>
    );
};

export default PricingOption;