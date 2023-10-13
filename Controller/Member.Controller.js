const Member = require("../Model/Member.Model")

async function createMember({name, phone_no, group_id}) {
    try {
        let member = await Member.create({ name, phone_no, group_id })
        return member
    } catch (error) {
        console.log( "error from creater Member function",error)
    }
}


module.exports = {createMember}