import React from 'react';
import PricingOption from '../PricingOption/PricingOption';

const Pricing = () => {

    const options = [
        {
            id: 1, name: 'Free', price: 0, benefits: [
                'unlimiter deal', 'locaziled deals', 'lifetime deals', 'free deals'
            ]
        },
        {
            id: 2, name: 'Regular', price: 99.9, benefits: [
                'everinthing on Free..', 'locaziled deals', 'lifetime deals', 'free deals'
            ]
        },
        {
            id: 3, name: 'Premium', price: 199.0, benefits: [
                'Everithing on Regular', 'locaziled deals', 'lifetime deals', 'free deals'
            ]
        },
    ]


    return (
        <div className='bg-indigo-300 p-5 mt-5'>

            <h1 className='text-5xl hover:font-mono'>Best Deals Of the Town !!!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit enim minima repellendus, laboriosam tempora temporibus dolore quasi laborum corrupti impedit.</p>

            <div className='grid md:grid-cols-3  gap-2 mt-5'>
                {
                    options.map(option => <PricingOption key={option.id}
                        option={option}></PricingOption>)
                }
            </div>

        </div>
    );
};

export default Pricing;