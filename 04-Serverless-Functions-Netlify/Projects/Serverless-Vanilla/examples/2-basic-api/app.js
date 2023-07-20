const result = document.querySelector('.result');

const fetchData = async () => {
    try {
        const {data} = await axios.get('/api/3-airtable');
        // console.log(data);
        const products = data.map(prod => {
            const {url, name, price} = prod;
            return `
                <article class="product">
                    <img
                        src="${url}"
                        alt="${name}"
                    />
                    <div class="info">
                        <h5>${name}</h5>
                        <h5 class="price">${price}</h5>
                    </div>
                </article>
            `
        }).join('')
        result.innerHTML = `${products}`;
    } catch (err) {
        result.innerHTML = `<h4>There was an error. Please try again later</h4>`;
    }
}

fetchData();

// const result = document.querySelector('.result')
//
// const fetchData = async () => {
//     try {
//         const {data} = await axios.get('/api/2-basic-api')
//         const products = data
//             .map((product) => {
//                 const {
//                     image: {url},
//                     name,
//                     price,
//                 } = product
//                 return `<article class="product">
//      <img src="${url}" alt="${name}"/>
//      <div class="info">
// <h5>${name}</h5>
// <h5 class="price">$${price}</h5>
//      </div>
//      </article>`
//             })
//             .join('')
//         result.innerHTML = products
//     } catch (error) {
//         result.innerHTML = `<h4>There was an error. Please try again later</h4>`
//     }
// }
//
// fetchData()
