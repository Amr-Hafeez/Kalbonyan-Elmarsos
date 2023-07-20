// domain/.netlify/functions/1-hello
// exports
// const person = { name: 'amr' }

exports.handler = async (event, context) => {
    return {
        statusCode: 200,
        body: 'Our First Netlify Function',
    }
}