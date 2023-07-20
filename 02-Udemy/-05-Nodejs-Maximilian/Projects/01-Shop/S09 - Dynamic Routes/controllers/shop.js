const Product = require('../models/product');
const Cart = require("../models/cart");

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'All Products',
            path: '/products'
        });
    });
};

exports.getProduct = (req, res, next) => {
    const prodId = req.params.id;
    Product.fetchAll(products => {
        const target = products.find(i => i.id === prodId);
        res.render('shop/product-detail', {
            path: '/products',
            pageTitle: `${target.title}`,
            prod: target
        })
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll(products => {
        res.render('shop/index', {
            prods: products,
            pageTitle: 'Shop',
            path: '/'
        });
    });
};

exports.getCart = (req, res, next) => {
    Cart.getCart(cart => {
        Product.fetchAll(products => {
            const cartProducts = [];
            for (product of products) {
                const cartProductData =
                    cart.products.find(prod => prod.id === product.id)
                if (cartProductData) {
                    cartProducts.push({product: product, qty: cartProductData.qty})
                }
            }
            res.render('shop/cart', {
                path: '/cart',
                pageTitle: 'Your Cart',
                products: cartProducts,
            });
        });
    })
};

exports.postCart = (req, res, next) => {
    const prodId = req.body.id;
    Product.fetchAll(products => {
        const target = products.find(i => i.id === prodId);
        Cart.addProduct(prodId, target.price);
    });
    res.redirect('/cart');
}

exports.postCartDeleteProduct = (req, res, next) => {
    const prodId = req.body.id;
    Product.fetchAll(products => {
        const prod = products.filter(p => p.id === prodId);
        Cart.deleteProduct(prodId, prod.price);
        res.redirect('/cart');
    })
}

exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        path: '/orders',
        pageTitle: 'Your Orders'
    });
};

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path: '/checkout',
        pageTitle: 'Checkout'
    });
};
