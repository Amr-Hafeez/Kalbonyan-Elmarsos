import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
    {
        id: 'p1',
        price: 6,
        title: 'My First Book',
        desc: 'The first book i ever wrote',
    },
    {
        id: 'p2',
        price: 5,
        title: 'My Second Book',
        desc: 'The Second book i ever wrote',
    }
];

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {
                    DUMMY_PRODUCTS.map(product => <ProductItem
                            id={product.id}
                            title={product.title}
                            price={product.price}
                            desc={product.desc}
                            key={product.id}
                        />
                    )
                }
                {/*<ProductItem*/}
                {/*    title='Test'*/}
                {/*    price={6}*/}
                {/*    description='This is a first product - amazing!'*/}
                {/*/>*/}
            </ul>
        </section>
    );
};

export default Products;
