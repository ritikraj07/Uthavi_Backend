const Admin = require("../Model/Admin.Model")
const { get_group_members } = require("./Group.Controller")

async function Register_Admin({email, password, name}) {
    try {
        const isAdminExist = await Admin.findOne({ email });
        if (isAdminExist) {
            throw new Error('Already have an account')
        }
        const admin = await Admin.create({ email, password, name })
        return admin
     }
    catch (error) {
        console.log("error from Refister Admin function controller")
        console.log(error)
        return error
    }
}


async function login_admin({ email, password }) {
    try {
        // Find the admin by email
        const admin = await Admin.findOne({ email });

        // Check if the admin exists
        if (!admin) {
            throw new Error('Admin not found');
        }


        if (password == admin.password) {
            
            if (admin.group_id.length > 0) {
                let members = await get_group_members(admin.group_id[0])
                return {admin, members: members}
            }
            return admin

        } else {
            throw new Error('Invalid password');
        }

        // Compare the provided password with the stored password hash
        // const isPasswordValid = await bcrypt.compare(password, admin.password);



        // if (!isPasswordValid) {
        //     throw new Error('Invalid password');
        // }

        // At this point, the login is successful
        // You can generate an authentication token or return the admin object as needed
        // For example, generating a JWT token:
        // const token = generateAuthToken(admin);

        // return { admin, token };
    } catch (error) {
        throw new Error('Login failed: ' + error.message);
    }
}




module.exports = {Register_Admin, login_admin}