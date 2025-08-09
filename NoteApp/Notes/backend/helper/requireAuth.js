import jwt from "jsonwebtoken";
import { initdb } from "../db/connection.js";

export async function requireAuth(req, res, next) {
 const {authorization} = req.headers;

    if (!authorization) {
        return res.status(401).json({error:"Authorization token required"})
    }

    const token = authorization.split(' ')[1];
    
    try {
        const db = await initdb();

        const { id } = jwt.verify(token, process.env.SECRET_KEY)

        const [exists] = await db.execute(
            "SELECT * FROM user WHERE id = ?",
            [id]
        );

        const user = exists[0];
        console.log(user)

        req.user = user
        next();

  } catch (error) {
    console.error(error);
    res.status(500).send({ error: "Internal server error" });
  }
}
