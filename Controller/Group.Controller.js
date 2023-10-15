const Admin = require("../Model/Admin.Model")
const Group = require("../Model/Group.Model")
const Member = require("../Model/Member.Model")


async function Create_Group({ admin_id, duration, intrest_rate, name, amount, earning, history, members_id }) {
    
    try { 
        const group = await Group.create({ admin_id, duration, intrest_rate, name, amount, earning, history, members_id })
        let admin = await Admin.findById(admin_id)
        admin.group_id.push(group._id);
        admin.groups.push({group_id: group._id, name: name})
        await admin.save();
        
        
        return group
    } catch (error) {
        console.log("error from Creat group controller")
        console.log(error)
    }
}

async function get_group_members(group_id) {
    try {
        const group = await Group.findById(group_id)
        const members = await Member.find({ group_id })
        return {group, members: members}
        
     } catch (error) {
        console.log("error fomr get group members controller")
        console.log(error)
    }
}

async function Add_id_to_winnerList(winner_id, id) {
    try {
        // Add winner id to the winner list
        const group = await Group.findByIdAndUpdate(id, {
            $push: { winner_list: winner_id }
        }, { new: true });

        if (!group) {
            throw new Error("No group found with the provided ID");
        }

        return group;
    } catch (error) {
        console.log("error from Add id to winner list ", error);
        throw error;
    }
}


module.exports = {Create_Group, get_group_members, Add_id_to_winnerList}