import Users from "../models/UserModel.js";
import jwt from "jsonwebtoken";

export const refreshToken = async(request, response) => {
    try{
        const refreshToken = await request.cookies.refreshToken;
        if(!refreshToken) return response.sendStatus(401);
        const user = await Users.findAll({
            where:{
                refresh_token: refreshToken
            }
        });
        if(!user[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return response.sendStatus(403);
            const userid = user[0].id;
            const name = user[0].name;
            const email = user[0].email;
            const accessToken = jwt.sign({userid, name, email}, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: '30s'
            });
            response.json({accessToken});
        });
    }catch(error){
        console.log(error);
    }
}