const { Router } = require('express')
const { Create_Group, get_group_members } = require('../Controller/Group.Controller')


const GroupRouter = Router()

/****************************************************** POST REQUEST *************************************************/


GroupRouter.post('/create', async (req, res) => {
    try {
        let { admin_id, duration, intrest_rate, name, amount, earning, history, members_id  } = req.body
        let group = await Create_Group({ admin_id, duration, intrest_rate, name, amount, earning, history, members_id })
        res.status(200).send({
            data: group
        })
     } catch (error) {
        res.status(400).send({
            data: 'error from group route'
        })
    }
})


/****************************************************** Get REQUEST *************************************************/


GroupRouter.get('/:id', async (req, res) => {
    try { 
        let id = req.params.id
        let members = await get_group_members(id)
        res.status(200).send({
            data: members
        })
    } catch (error) {
        res.status(400).send({
            data: 'error from group route'
        })
    }
})




module.exports = GroupRouter