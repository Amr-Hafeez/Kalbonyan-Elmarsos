const attackCookie = ({res, token}) => {
    const threeDays = 3 * 24 * 60 * 60 * 1000;
    res.cookie('token', token, {
        httpOnly: true,
        expires: new Date(Date.now() + threeDays),
        secure: process.env.NODE_ENV === 'production'
    });
};

export default attackCookie;