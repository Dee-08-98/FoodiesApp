const express = require('express')
const registeRrouter = new express.Router()
const user = require('../Database/DatabaseSchema')
const bcrypt = require('bcryptjs')

registeRrouter.post('/register', async(req, res) => {
    const { userName, userEmail, confPassword, Password } = req.body

    if (!userName || !userEmail || !confPassword || !Password) {
        res.status(422).json({ error: "Please fill all Details" })
    }
    try {
        const getEmail = await user.findOne({ userEmail: userEmail })

        if (getEmail){
            res.status(422).json({ error: "User already exist" })
        }
        else if(Password !== confPassword) {
            res.status(422).json({ error: "Password and confirm password not match " })
        }
        else{
            const finalUser = new user({
                userName: userName,
                userEmail: userEmail,
                confPassword: await bcrypt.hash(confPassword,12),
                Password:  await bcrypt.hash(Password,12)
            })
            const storeData = await finalUser.save()
           res.status(200).json({sucess : true , message : "Registration sucessfull"})
        }

    } catch (error) {
        res.status(500).json({error:"Found Error"})
    }
})

module.exports = registeRrouter