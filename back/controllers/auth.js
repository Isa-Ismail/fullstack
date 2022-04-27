const User = require ('../models/user')
const shortId = require('shortid')
const jwt = require ('jsonwebtoken')

//signing up users
exports.signup = async (req, res) => {
    const {name, email, password} = req.body
    
    try {
    //checking user by email existance
    const user = await User.findOne( {email} )
    //if email exists that means we gotta shut down the response sending status 400
    if(user){
        return res.status(400).json({error: 'email is already taken'})
    }
    //if user does not exist 
    let username = shortId.generate()
    let profile = `${process.env.CLIENT_URL}/profile/${username}`
    let newUser = new User({name, email, password, profile, username})
    await newUser.save()
    //if success
    res.json({message: 'Successfully signed up, please sign in' })

    } catch (err) {
        console.error(err.message)
        res.status(500).send('server issue')
    }
}

//siginig in users
exports.signin = async (req, res) => {

    const {email, password} = req.body
    try {
    //checking user by email existance
    const user = await User.findOne({ email })
    //checking email existance
    if(!user){
        return res.status(400).json({error: 'Wrong credentials'})
    }
    //checking password validity
    if(!user.authenticate (password)){
        return res.status(400).json({error: 'Wrong credentials'})
    }
    //this is a jwt payload 
    const payload = {
        _id: user._id
    }
    //jwt processing -> jwt.sign({ payload, secret, expiryDate})
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: '1d'})
    res.cookie('token', token, {expiresIn: '1d'})
    //if success then send token
    return res.json({token, user})
    } catch (err) {
        console.error(err.message)
        res.status(500).send('server issue')
    }
}

//signing out users
exports.signout = (req, res) => {
    res.clearCookie('token')
    return res.json({
        message: 'signed out'
    })
}

//requireSignin middleware
exports.requireSignin = (req, res, next) => {
    // Get token from header
    const token = req.header('x-auth-token')
    // Check if token is not there
    if(!token){
        return res.status(401).json({msg:'token not found, unauthorized request'})
    }
    //verify token with -> jwt.verify(token, secret, callback(err, decoded))
    try{
        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) {
              return res.status(401).json({ msg: 'Token is not valid' });
            } else {
              req._id = decoded._id
              next()
            }
          });
    }catch(err){
        console.error('something wrong with auth middleware');
        res.status(500).json({msg:'Server error'});
    }
}