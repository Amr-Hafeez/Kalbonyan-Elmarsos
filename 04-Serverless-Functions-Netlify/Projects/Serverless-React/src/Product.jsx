import {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

const Product = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState(null);
    const {productId} = useParams();
    
    const fetchProduct = async () => {
        try {
            const {data: {fields}} = await axios.get(`/api/products?id=${productId}`);
            
            setProduct(fields);
        } catch (err) {
        
        }
        setLoading(false);
    }
    
    useEffect(() => {
        fetchProduct();
    }, []);
    
    console.log(product);
    if (loading) {
        return <section className="section section-center">
            <h2>Loading...</h2>
        </section>
    }
    
    const {name, desc, price, image} = product;
    return <section className="section section-center">
        <Link to={'/'} className={'link'}>Back Home</Link>
        <div>
            <div className="title">
                <h2>{name}</h2>
                <div className="title-underline"></div>
            </div>
            <article className="single-product">
                <img src={image[0].url} alt={name} className="single-product-img"/>
                <div>
                    <h5>{name}</h5>
                    <h5 className="price">{price}</h5>
                    <p>{desc}</p>
                </div>
            </article>
        </div>
    </section>
};

export default Product;
