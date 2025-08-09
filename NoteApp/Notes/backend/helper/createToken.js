import jwt from "jsonwebtoken";
export function createToken(id){
    return jwt.sign(
        {id},
        process.env.SECRET_KEY,
        {expiresIn:"1d"});
}