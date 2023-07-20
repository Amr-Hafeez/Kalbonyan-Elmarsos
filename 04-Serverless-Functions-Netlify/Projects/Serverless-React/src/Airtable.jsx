import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
const url = '/api/products';

const Airtable = () => {
    const [products, setProducts] = useState([]);
    const fetchProducts = async () => {
        try {
            const {data} = await axios.get(url);
            setProducts(data)
        } catch (err) {
            console.log(err);
        }
    }
    
    useEffect(() => {
        fetchProducts();
    }, []);
    return (
        <section className={'section section-center'}>
            <div className="title">
                <h2>Airtable</h2>
                <div className="title-underline"></div>
            </div>
            
            <div className="products">
                {
                    products.map(prod => {
                        const {id, url, price, name} = prod;
                        return (
                            <Link className={'product'} key={id} to={`/${id}`}>
                                <img src={url} alt={name}/>
                                <div className="info">
                                    <h5>{name}</h5>
                                    <h5 className={'price'}>${price}</h5>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </section>
    );
};

export default Airtable;
