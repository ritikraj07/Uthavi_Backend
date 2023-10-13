const { Schema, model } = require('mongoose')

const AdminSchema = new Schema({
    email: {
        require: true,
        type: String
    },
    password: {
        require: true,
        type: String
    },
    name: {
        require: true,
        type: String
    },
    groups: [],
    total_earning: Number,
    group_id:[]

})

const Admin = model("Admin", AdminSchema)

module.exports = Admin