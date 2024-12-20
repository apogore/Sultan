import { useEffect, useState } from 'react';
import "./price-filter.scss";

const PriceFilter = ({ resetFilter }) => {
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [maxProductPrice, setMaxProductPrice] = useState(0);


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/mini-card/product.json");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const fetchedData = await response.json();
            const pricesArray = fetchedData.map(product => Number(product.price));

            setMaxProductPrice(Math.max(...pricesArray));
            setMaxPrice(Math.max(...pricesArray));
        };
        fetchData();
    }, []);

    localStorage.setItem('selectedMaxPrice', maxPrice.toString());
    localStorage.setItem('selectedMinPrice', minPrice.toString());

    useEffect(() => {
        setMaxPrice(maxProductPrice);
        setMinPrice(0);
        
        localStorage.setItem('selectedMaxPrice', maxPrice.toString());
        localStorage.setItem('selectedMinPrice', minPrice.toString());
        
    }, [resetFilter]);

    const handleMinPrice = () => {
        let newMinPrice = Number(minPrice);

        if (newMinPrice < 0) {
            newMinPrice = 0;
        }

        if (newMinPrice > maxPrice) {
            newMinPrice = maxPrice - 0.1;
        }

        setMinPrice(newMinPrice);
        localStorage.setItem('selectedMinPrice', newMinPrice.toString());
    };

    const handleMaxPrice = () => {
        let newMaxPrice = Number(maxPrice);

        if (!newMaxPrice) {
            newMaxPrice = maxProductPrice;
        }

        if (newMaxPrice < 0) {
            newMaxPrice = maxProductPrice;
        }

        if (newMaxPrice < minPrice) {
            newMaxPrice = minPrice + 0.1;
        }

        if (newMaxPrice > maxProductPrice) {
            newMaxPrice = maxProductPrice;
        }

        setMaxPrice(newMaxPrice);
        localStorage.setItem('selectedMaxPrice', newMaxPrice.toString());
    };

    return (

        <div className='price-filter'>
            <p className='price-filter__title'>Цена <span>₸</span></p>

            <div className='price-filter__block'>
                <input
                    id="price-filter-minPrice"
                    type="number"
                    value={minPrice}
                    onBlur={handleMinPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    placeholder="От"
                />

                <span>-</span>
                
                <input
                    id="price-filter-maxPrice"
                    type="number"
                    value={maxPrice}
                    onBlur={handleMaxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    placeholder="До"
                />
            </div>
        </div>
    );
};

export default PriceFilter;
