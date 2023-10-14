const { Router } = require('express')
const { createMember, changeStatus } = require('../Controller/Member.Controller')


const MemberRouter = Router()

MemberRouter.post('/create', async (req, res) => {
    try { 
        let { group_id, name, phone_no, history } = req.body
        let member = await createMember({ group_id, name, phone_no, history })
        res.send({
            data: member
        })
    } catch (error) {
        res.send("error from member router", error)
    }
})

MemberRouter.post('/update', async (req, res) => {
    try {
        let { month, _id, newStatus } = req.body
        let member = await changeStatus({ month, _id, newStatus })
        res.send({
            data: member
        })
    } catch (error) {
        res.send("error from member router", error)
    }
})



module.exports = MemberRouter