const { Schema, model } = require('mongoose')

const MemberSchema = new Schema({
    name: {
        require: true,
        type: String
    },
    history: {},
    group_id: {
        type: String,
        require: true
    },
    phone_no:String

})

const Member = model("Member", MemberSchema)

module.exports = Member