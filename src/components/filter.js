import React, { useState } from 'react'
import './filter.css'
import img5 from '../images/mobile.jpeg'
import img6 from '../images/tshirt.jpeg'
import img7 from '../images/coffeemaker.jpeg'

const Filter = () => {
    const [category, setCategory] = useState('');
    const [sortOption, setSortOption] = useState('');
    // const history = useHistory();

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleSortOptionChange = (event) => {
        setSortOption(event.target.value);
    };
    return (
        <div>
            <div class="filter-container">
                <section>
                    <div class="filter-options">
                        <label for="category">Filter by Category:</label>
                        <select id={category} onChange={handleCategoryChange}>
                            <option value="all">All Categories</option>
                            <option value="electronics">Electronics</option>
                            <option value="clothing">Clothing</option>
                            <option value="home">Home & Living</option>
                        </select>
                    </div>
                    <div class='filter-options'>
                        <select id={sortOption} onChange={handleSortOptionChange}>
                            <option value="default">Default Category</option>
                            <option value="latest">Sort by latest</option>
                            <option value="pricelowtohigh">Sort by price:low to high</option>
                            <option value="pricehightolow">Sort by price:high to low</option>
                            <option value="popularity">Sort by popularity</option>
                        </select>
                    </div>
                </section>
                <section>
                    <div class="product-list">
                        <div class="product" data-category="electronics">
                            <img src={img5} alt="Smartphone" />
                            <h4>Smartphone</h4>
                            <p>i phone 11</p>
                            <p>price-$12</p>
                        </div>
                        <div class="product" data-category="clothing">
                            <img src={img6} alt="T-Shirt" />
                            <h4>T-Shirt</h4>
                            <p>anime t-shirt</p>
                            <p>Price-$10</p>
                        </div>
                        <div class="product" data-category="home">
                            <img src={img7} alt="Coffee Maker" />
                            <h4>Coffee Maker</h4>
                            <p>bajaj</p>
                            <p>Price-$5</p>
                        </div>
                        <div class="product" data-category="home">
                            <img src={img7} alt="Coffee Maker" />
                            <h4>Coffee Maker</h4>
                            <p>bajaj</p>
                            <p>Price-$5</p>
                        </div>
                        <div class="product" data-category="electronics">
                            <img src={img5} alt="Smartphone" />
                            <h4>Smartphone</h4>
                            <p>i phone 11</p>
                            <p>price-$12</p>
                        </div>
                        <div class="product" data-category="electronics">
                            <img src={img5} alt="Smartphone" />
                            <h4>Smartphone</h4>
                            <p>i phone 11</p>
                            <p>price-$12</p>
                        </div>
                        <div class="product" data-category="electronics">
                            <img src={img5} alt="Smartphone" />
                            <h4>Smartphone</h4>
                            <p>i phone 11</p>
                            <p>price-$12</p>
                        </div>
                        <div class="product" data-category="electronics">
                            <img src={img5} alt="Smartphone" />
                            <h4>Smartphone</h4>
                            <p>i phone 11</p>
                            <p>price-$12</p>
                        </div>
                        <div class="product" data-category="electronics">
                            <img src={img5} alt="Smartphone" />
                            <h4>Smartphone</h4>
                            <p>i phone 11</p>
                            <p>price-$12</p>
                        </div>
                        <div class="product" data-category="electronics">
                            <img src={img5} alt="Smartphone" />
                            <h4>Smartphone</h4>
                            <p>i phone 11</p>
                            <p>price-$12</p>
                        </div><div class="product" data-category="electronics">
                            <img src={img5} alt="Smartphone" />
                            <h4>Smartphone</h4>
                            <p>i phone 11</p>
                            <p>price-$12</p>
                        </div>
                        <div class="product" data-category="electronics">
                            <img src={img5} alt="Smartphone" />
                            <h4>Smartphone</h4>
                            <p>i phone 11</p>
                            <p>price-$12</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Filter;