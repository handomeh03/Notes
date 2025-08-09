import { useNote } from "../Context/Notescontext";
import { useSaveUser } from "../Context/userContext";
import { UseUser } from "./useUser";

export function UseCreateNote(){
    let {Notedispatch}=useNote();
    let{user}=useSaveUser();
    async function createNote(title,decription) {
         try {
      const res = await fetch("http://localhost:8080/api/notes/createNote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.token}`
        },
        body: JSON.stringify({ title, decription })
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.error);
      }
      if (res.ok) {
        Notedispatch({ type: "createNote", payload: data.note });
      }
    } catch (error) {
      console.log(error);
    }
    }
    return {createNote}
}