router.post('/login', [
    check('email')
        .isEmail()
        .withMessage('Please enter a valid email!'),
    body('password',
        'Please enter a password with only numbers and text and at least 5 character')
        .isLength({ min: 5, max: 500 })
        .isAlphanumeric()
], authController.postLogin);

//post login controller
exports.postLogin = (req, res, next) => {
    const email = req.body.email
    const password = req.body.password
    
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).render('auth/login', {
            path: '/login',
            pageTitle: 'login',
            errorMessage: errors.array()[0].msg
        });
    }
    
    User.findOne({ email: email })
        .then(user => {
            if (!user) {
                req.flash('error', 'Invalid email or password')
                return res.redirect('/login')
            }
            bcrypt.compare(password, user.password)
                .then(result=> {
                    if (result) {
                        req.session.isLogged= true;
                        req.session.user = user;
                        return req.session.save(err => {
                            console.log(err);
                            res.redirect('/');
                        });
                    }
                    req.flash('error', 'Invalid email or password')
                    return res.redirect('/login')
                })
                .catch(err => {
                    console.log(err);
                    res.redirect('/login')
                })
            
        })
        .catch(err => console.log(err));
};