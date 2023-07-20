import {useState, useEffect} from 'react';
import axios from "axios";
const url = 'api/products';

const Basic = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const {data} = await axios.get(url);
            setProducts(data)
        } catch (err) {
            // console.log(err);
        }
    }
    
    useEffect(() => {
        fetchProducts();
    }, []);
    
    return (
        <section className={'section section-center'}>
            <div className="title">
                <h2>basic setup</h2>
                <div className="title-underline"></div>
            </div>
            
            <div className="products">
                {
                    products.map(prod => {
                        const {id, url, price, name} = prod;
                        return (
                            <article className={'product'} key={id}>
                                <img src={url} alt={name}/>
                                <div className="info">
                                    <h5>{name}</h5>
                                    <h5 className={'price'}>${price}</h5>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Basic;
