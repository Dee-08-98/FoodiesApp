const express = require('express')
const router = new express.Router()
const userdb = require('../Database/UserSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secretkey = 'ghyfgygujijkughybgvcfgbhfsdrtyc'
const authmiddleware = require('../Tokens.js')
const userCon = require('../Database/ContactSchema.js')
const userTable = require('../Database/TableSchema.js')

router.post('/register', async (req, res) => {
    const { userName, userEmail, Password, confPassword } = req.body


    if (!userName || !userEmail || !Password || !confPassword) {
        res.status(400).json({ sucess: false, message: " Invalid Field " })
    }

    try {
        const findEmail = await userdb.findOne({ userEmail: userEmail })
        if (findEmail) {
            res.status(400).json({ sucess: false, message: "User already Exist" })
        }
        else {
            const userField = new userdb({
                userName: userName,
                userEmail: userEmail,
                Password: await bcrypt.hash(Password, 12),
                confPassword: await bcrypt.hash(confPassword, 12)
            })
            const storeData = await userField.save()
            console.log(storeData);
            res.status(200).json({ sucess: true, message: "Registration sucessfull" })
        }



    } catch (error) {
        res.status(500).json({ error: "Found Error" })

    }
})






router.post('/login', async (req, res) => {
    const { userEmail, Password } = req.body

    if (!userEmail || !Password) {
        res.status(400).json({ sucess: false, message: "Invalid Field" })
    }

    try {
        const findEmailLogin = await userdb.findOne({ userEmail })
        if (findEmailLogin) {
            const ispassword = await bcrypt.compare(Password, findEmailLogin.Password)
            if (ispassword) {
                const payloadOfToken = {
                    userID: findEmailLogin.id,
                    userName: findEmailLogin.userName,
                    userEmail: findEmailLogin
                }
                const token = jwt.sign({ payloadOfToken }, secretkey, { expiresIn: '3d' })
                res.status(200).json({ sucess: true, message: "Login Sucessfull", token: token })
            }
            else {
                res.status(400).json({ sucess: false, message: "Invalid Password" })
            }
        }
        else {
            res.status(400).json({ sucess: false, message: "User Not Found" })
        }

    } catch (error) {
        res.status(500).json({ error: "Found Error" })
    }

})


router.get('/Home/valid', authmiddleware, (req, res) => {
    res.status(200).json({ sucess: true, userData: req.user })
})



router.post('/contact', async (req, res) => {
    const { Name, Email, ContactNo, Message } = req.body


    if (!Name || !Email || !ContactNo || !Message) {
        res.status(400).json({ sucess: false, message: " Invalid Field " })
    }
    try {
        const datas = new userCon({
            Name,
            Email,
            ContactNo,
            Message
        })
        const result = await datas.save()
        res.status(200).json({ sucess: true, message: "Message send Sucessfull" })
    } catch (error) {
        res.status(500).json({ error: "Found Error" })
    }
})




router.post('/table', async (req, res) => {
    const {usrName , totalPeople , totalChild , totalTable , bookingDate , StartBookingTime , endBookingTime } = req.body


    if (!usrName || !totalPeople || !totalChild || !totalTable || !bookingDate || !StartBookingTime || !endBookingTime) {
        res.status(400).json({ sucess: false, message: " Invalid Field " })
    }
    try {
        const datas = new userTable({
            usrName,
            totalPeople,
            totalChild,
            totalTable,
            bookingDate,
            StartBookingTime,
            endBookingTime
        })
        const result = await datas.save()
        res.status(200).json({ sucess: true, message: "Message send Sucessfull" })
    } catch (error) {
        res.status(500).json({ error: "Found Error" })
    }
})

module.exports = router