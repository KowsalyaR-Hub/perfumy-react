import one from "../assets/images/1.png";
import two from "../assets/images/2.png";
import three from "../assets/images/3.png";
import four from "../assets/images/4.png";
import five from "../assets/images/5.png";
import six from "../assets/images/6.png";
import seven from "../assets/images/7.png";
import eight from "../assets/images/8.png";

// Product Component
function Products() {
    return (
        <div className="products" id="products">
            <div className="product-item">
                <img src={one} alt="Perfume_image"></img>
                <p>Fogg Wood Extreme, Eau De Perfume, Long-Lasting Perfume, 100ml</p>
            </div>
            <div className="product-item">
                <img src={two} alt="Perfume_image"></img>
                <p>Beardo Leather Extreme, Eau De Perfume, Long-Lasting Perfume, 100ml</p>
            </div>
            <div className="product-item">
                <img src={three} alt="Perfume_image"></img>
                <p>Marks & Spencer Extreme, Eau De Perfume, Long-Lasting Perfume, 50ml</p>
            </div>
            <div className="product-item">
                <img src={four} alt="Perfume_image"></img>
                <p>Park Avenue Perfume, Eau De Perfume, Long-Lasting Perfume, 200ml</p>
            </div>
            <div className="product-item">
                <img src={five} alt="Perfume_image"></img>
                <p>Carlton London Extreme, Eau De Perfume, Long-Lasting Perfume, 100ml</p>
            </div>
            <div className="product-item">
                <img src={six} alt="Perfume_image"></img>
                <p>Eternity Extreme Perfume, Eau De Perfume, Long-Lasting Perfume, 50ml</p>
            </div>
            <div className="product-item">
                <img src={seven} alt="Perfume_image"></img>
                <p>Sarah Jessica Extreme, Eau De Perfume, Long-Lasting Perfume, 50ml</p>
            </div>
            <div className="product-item">
                <img src={eight} alt="Perfume_image"></img>
                <p>Phy Perfume for Men, Eau De Perfume, Long-Lasting Perfume, 80ml</p>
            </div>
        </div>
    )
}

export default Products