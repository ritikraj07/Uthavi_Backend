const Group = require("../Model/Group.Model")
const Member = require("../Model/Member.Model")

async function createMember({group_id, name, phone_no, history}) {
    console.log( "console from createMember",{ group_id, name, phone_no, history })
    try {
        let group = await Group.findById(group_id)
        if (!group) {
            throw new Error("No group found")
        }
        let member = await Member.create({ group_id, name, phone_no, history })
        
        console.log("group from create member 9", group)
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
        return member
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



async function changeStatus({ month, _id, newStatus }) {
    try {
        const updatedMember = await Member.findByIdAndUpdate(
            _id,
            { $set: { [`history.${month}`]: newStatus } },
            { new: true }
        );

        if (!updatedMember) {
            throw new Error("No member found with the provided ID");
        }

        return updatedMember;
    } catch (error) {
        console.error("Error from change status:", error);
        throw error; // Rethrow the error to handle it outside the function
    }
}


module.exports = {createMember, updateMember, changeStatus, getMember}