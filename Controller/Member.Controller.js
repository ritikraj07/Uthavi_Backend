const Group = require("../Model/Group.Model")
const Member = require("../Model/Member.Model")

async function createMember({group_id, name, phone_no, history}) {
    
    try {
        let member = await Member.create({ group_id, name, phone_no, history })
        let group = await Group.findById(group_id)
        group.members_id.push(member._id)
        await group.save()
        return {member}
    } catch (error) {
        console.log( "error from creater Member function",error)
    }
}

async function getMember(id) {
    try {
        let member = await Member.findById(id)
        if (!member) {
            throw new Error("no member with this id")
        }
    } catch (error) {
        console.log("error from getMember function", error)
    }
}


async function updateMember({ name, phone_no, history, _id }) {
    try {
        let member = await Member.findByIdAndUpdate(_id, { name: name, phone_no: phone_no, history: history }, { new: true });
        console.log("member 32", member)
        return member;
    } catch (error) {
        console.log("error from updateMember function", error);
    }
}


module.exports = {createMember, updateMember}