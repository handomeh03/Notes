import { useNote } from "../Context/Notescontext";
import { useSaveUser } from "../Context/userContext";

export function UseDelete(){
     let { user } = useSaveUser();
      let {Notedispatch}=useNote();
    const handleDeleteNote = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/notes/deleteNote/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      if(res.ok){
        Notedispatch({type:"deletenote",payload:{id}});
      }

    } catch (error) {
      console.log(error);
    }
  };
  return{ handleDeleteNote}
}