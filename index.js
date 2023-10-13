require('dotenv').config()
const express = require('express');
const cors = require('cors');
const morgan = require('morgan')
const ConnectDatabase = require('./DB');
const AdminRouter = require('./Router/Admin.Router');
const GroupRouter = require('./Router/Group.Router');
const MemberRouter = require('./Router/Member.Router');

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'))



app.get("/", (req, res) => {
    res.send("all is well")
})

app.use('/admin', AdminRouter)
app.use('/group', GroupRouter)
app.use('/member', MemberRouter)


ConnectDatabase()
    .then(() => {
        app.listen(8000)
        console.log("Server Started")
    }).catch((error) =>console.log("Error==>", error))


// Admin Data
// {
//     "data": {
//         "email": "tommy@gmail.com",
//             "password": "2435234",
//                 "name": "Ritik",
//                     "groups": [],
//                         "group_id": [],
//                             "_id": "65284802fd19542837c18902",
//                                 "__v": 0
//     }
// }



// group


// {
//     "data": {
//         "admin": {
//             "_id": "65284802fd19542837c18902",
//                 "email": "tommy@gmail.com",
//                     "password": "2435234",
//                         "name": "Ritik",
//                             "groups": [
//                                 {
//                                     "group_id": "65284e930a8164978998f26a",
//                                     "name": "chit fund"
//                                 }
//                             ],
//                                 "group_id": [
//                                     "65284e930a8164978998f26a"
//                                 ],
//                                     "__v": 1
//         },
//         "members": { }
//     }
// }