import { initdb } from "../db/connection.js";

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export async function GetNotes(req, res) {
  try {
    let users = req.user;

    let pageNumber = parseInt(req.query.pageNumber) || 1;
    let limit = parseInt(req.query.limit) || 10;
    let OFFSET = (pageNumber - 1) * limit;

    let db = await initdb();

    let [[noteRows], [countRows]] = await Promise.all([
      db.execute(`SELECT * FROM note WHERE user_id = ? LIMIT ${limit} OFFSET ${OFFSET}`, [users.id]),
      db.execute("SELECT COUNT(*) AS count FROM note WHERE user_id = ?", [users.id])
    ]);
    if (noteRows.length === 0) {
      return res.status(404).send({ error: "no note for this user" });
    }

    return res.status(200).send({
      Notes: noteRows,
      count: countRows[0].count
    });

  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "internal server error" });
  }
}

 export async function Createnote(req, res) {
    let { title, decription } = req.body;
    let user=req.user;

    if (!title || !decription) {
        return res.status(400).send({ error: "Please fill all input fields" });
    }

    try {
        let db = await initdb();
        let [result] = await db.execute(
            "INSERT INTO note (Title, decription, user_id) VALUES (?, ?, ?);",
            [title, decription, user.id] 
        );

        let [rows]=await db.execute( "SELECT * FROM note WHERE id = ? and user_id = ? ",
            [result.insertId,user.id]
        );
        if (rows.length === 0) {
            return res.status(404).send({ error: "Note not found after insertion" });
        }
         res.status(201).send({
            message: "Note created successfully",
            note: rows[0]
        });


    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Internal server error" });
    }
}

/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */

export async function DeleteNote(req, res) {
    const { id } = req.params;
    const user = req.user;

    if (isNaN(Number(id))) {
        return res.status(400).send({ error: "Please send a correct id" });
    }

    try {
        const db = await initdb();
        const [rows] = await db.execute(
            "SELECT * FROM note WHERE id = ? AND user_id = ?",
            [id, user.id]
        );

        if (rows.length === 0) {
            return res.status(404).send({ error: "No note found." });
        }

        await db.execute(
            "DELETE FROM note WHERE id = ? AND user_id = ?",
            [id, user.id]
        );

        res.status(200).send({ message: "Note deleted successfully", note: rows[0] });
    } catch (error) {
        console.error("DeleteNote error:", error);
        res.status(500).send({ error: "Internal server error" });
    }
}
export async function UpdateNote(req,res) {
    let {id}=req.params;
    let { title, decription } = req.body;
    let user=req.user;


     if (isNaN(Number(id))) {
        return res.status(400).send({ error: "Please send a correct id" });
    }

     if (!title || !decription) {
        return res.status(400).send({ error: "Please fill all input fields" });
    } 
    try {
       const db = await initdb();
        const [exisit] = await db.execute(
            "SELECT * FROM note WHERE id = ? AND user_id = ?",
            [id, user.id]
        );

        if (exisit.length === 0) {
            return res.status(404).send({ error: "No note found" });
        }
        await db.execute("update note set Title = ? ,decription = ? where id= ? and user_id = ?;",[
            title,
            decription,
            id,
            user.id
        ])
        let [row] =await db.execute(
            "SELECT * FROM note WHERE id = ? AND user_id = ?",
            [id, user.id]
        );
      return res.status(200).send({message:"Note updated successfully",note:row[0]});
        
    } catch (error) {
      return  res.status(500).send({error:"internel server error"})
    }
}

