const { Router } = require('express')
const { createMember, updateMember } = require('../Controller/Member.Controller')


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

MemberRouter.patch('/update', async (req, res) => {
    try {
        let { _id, name, phone_no, history } = req.body
        let member = await updateMember({ _id, name, phone_no, history })
        res.send({
            data: member
        })
    } catch (error) {
        res.send("error from member router", error)
    }
})



module.exports = MemberRouter