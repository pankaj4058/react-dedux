import React from 'react';

function Home()
{
    return(
        <div>
            <div className="add-to-cart">
                <img src="https://neweraindustries.com/wp-content/themes/child-theme-twentytwenty/catalog/images/shopping-cart.png" />
            </div>
            <hi>Home Component</hi>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SX679_.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        I-Phone
                    </span>
                    <span>
                        Price: $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Home;