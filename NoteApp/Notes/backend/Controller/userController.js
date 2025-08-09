import { initdb } from "../db/connection.js";
import { createToken } from "../helper/createToken.js";
import validator from "validator";
import  bcrypt from "bcrypt";
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export async function login(req, res) {
  let { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({ error: "Please fill all input" });
  }
  try {
    const db = await initdb();
    const [rows] = await db.execute("SELECT * FROM user WHERE email = ?", [email]);

    if (rows.length === 0) {
      return res.status(400).send({ error: "User not found" });
    }

    const user = rows[0];

    let match= await bcrypt.compare(password,user.password);
    if (!match) {
      return res.status(400).send({ error: "Password is incorrect" });
    }

    const token = await createToken(user.id);

    return res.status(200).send({ token, name: user.name });

  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Internal server error" });
  }
}

export async function signup(req, res) {
  let { name,email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send({ error: "Please fill all input" });
  }
  if(!validator.isEmail(email)){
  return  res.status(404).send({error:"does not email"})
  }
  if(!validator.isStrongPassword(password)){
  return  res.status(404).send({error:"password not strong"}

    )
  }
  try {
    const db = await initdb();
    const [rows] = await db.execute("SELECT * FROM user WHERE email = ?", [email]);

   if(rows.length!=0){
   return res.status(404).send({error:"email is already exixt"});
   }
   let salt= await bcrypt.genSalt(10);
   let hashpassword=await bcrypt.hash(password,salt);

  let [newUser]= await db.execute("insert into user(name,email,password) values (?,?,?);",
    [
      name,
      email,
      hashpassword
    ]
   )

   let token= await createToken(newUser.insertId)
   res.status(200).send({token,name});

  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Internal server error" });
  }
}

