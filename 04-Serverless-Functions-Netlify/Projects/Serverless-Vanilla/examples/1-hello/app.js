const result = document.querySelector('.result');

const fetchDate = async () => {
    try {
        const {data} = await axios.get('/api/1-hello');
        result.textContent = data;
    } catch (err) {
        console.log(err.response.data);
    }
}

fetchDate();