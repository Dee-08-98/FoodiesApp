const jwt = require('jsonwebtoken')
const secretkey = 'ghyfgygujijkughybgvcfgbhfsdrtyc'
const authmiddleware = (req, res, next) => {
    const head = req.headers.authorization
    if(!head){
        return res.status(401).json({ sucess: false, message: "Token not found" })
    }
    const token = head.split(' ')[1]
    if (!token) {
        return res.status(401).json({ sucess: false, message: "Unauthorised" })
    }

    try {
        if (token) {
            const getToken = jwt.verify(token, secretkey)
            req.user = getToken
            next()
        }
    } catch (error) {
         return res.status(400).json({ error: "Invalid token" })
    }

}



// const generateToken = (userData) => {
//     return jwt.sign(userData, secretKey)
// }

module.exports =  authmiddleware