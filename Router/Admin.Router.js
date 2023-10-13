const { Router } = require('express')
const { Register_Admin, login_admin } = require('../Controller/Admin.Controller')

const AdminRouter = Router()

/****************************************************** POST REQUEST *************************************************/

AdminRouter.post('/register', async (req, res) => {
    try { 
        let { email, password, name } = req.body
        console.log('==>', email, password, name)
        let admin = await Register_Admin({ email, password, name })
        res.status(200).send({
            data: admin
        })
    } catch (error) {
        res.status(404).send(error)
    }
})


AdminRouter.post('/login', async (req, res) => {
    try { 
        let { email, password } = req.body
        let admin = await login_admin({ email, password })
        res.status(200).send({
            data: admin
        })
    } catch (error) {
        res.status(404).send(error)
    }
})


AdminRouter.get("/", async (req, res) => {
    res.send({
        data: "ok"
    })
})



module.exports = AdminRouter