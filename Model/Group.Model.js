const { Schema, model } = require('mongoose')

const GroupSchema = new Schema({
    admin_id: {
        type: String,
        required: true
    },
    members_id: [],
    duration: {
        type: Number,
        required: true
    },
    earning: Number,
    winner_list: [], // id of winner members
    intrest_rate: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }

}, {
    timestamps: true
}
)

const Group = model("Group", GroupSchema)

module.exports = Group