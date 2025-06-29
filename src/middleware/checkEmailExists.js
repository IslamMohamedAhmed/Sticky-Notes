import { userModel } from "../../Database/models/userModel.js"


export const checkEmailExists = async (req, res, next) => {

    const user = await userModel.findOne({ email: req.body.email });
    if(user){
        return res.json({message:"email already exists!"});
    }

    next();

}
