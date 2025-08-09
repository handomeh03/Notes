import { useState } from "react";
import { useNote } from "../Context/Notescontext";
import { useSaveUser } from "../Context/userContext";

export function Useupdatenote() {
  let { user } = useSaveUser();
  let { Notedispatch } = useNote();
  let [error,seterror]=useState("");
  let {dispatch}=useSaveUser();
  
  async function handleUpdateNnote(id, subTitle, subdecription) {
    try {
      const res = await fetch(
        `http://localhost:8080/api/notes/updateNot/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({ title: subTitle, decription: subdecription }),
        }
      );
      const data = await res.json();
      console.log(data.note);
      if (res.ok) {
        Notedispatch({ type: "updatenote", payload: { note: data.note, id } });
      }
      if(!res.ok){
          dispatch({type:"dialog",payload:true})
         seterror(data.error);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return { handleUpdateNnote,error };
}
