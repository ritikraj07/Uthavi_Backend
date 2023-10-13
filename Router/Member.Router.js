const { Router } = require('express')
const { createMember } = require('../Controller/Member.Controller')


const MemberRouter = Router()

MemberRouter.post('/create', async (req, res) => {
    try { 
        let { name, phone_no, group_id } = req.body
        let member = await createMember({ name, phone_no, group_id })
        res.send({
            data: member
        })
    } catch (error) {
        res.send("error from member router", error)
    }
})

module.exports = MemberRouter