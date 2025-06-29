import { userModel } from "../../../Database/models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const signup = async (req, res) => {
    await userModel.create(req.body);
    res.json({ message: 'success' });
};

const signin = async (req, res) => {
    let user = await userModel.findOne({ email: req.body.email });
    if (user) {
        const match = bcrypt.compareSync(req.body.password, user.password);
        if (match) {
            let token = jwt.sign({ userId: user._id, role: user.roles }, 'IssoQoderaFullStack');
            return res.json({ message: "success", token });
        }
        else {
            return res.json({ message: "incorrect email or password" });
        }

    }
    else {
        return res.json({ message: "this email doesn't exist" });
    }
};
export {
    signup,
    signin
}



