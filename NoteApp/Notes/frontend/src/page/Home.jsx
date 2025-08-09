import Loading from "../Componnet/Loading";
import style from "../CSS/Home.module.css";
import { useLoading } from "../hooks/UseLoading";
import { UseFetchNote } from "../hooks/useFetchNote";
import { useNote } from "../Context/Notescontext";
import CreateNote from "../Componnet/CreateNote";
import Notess from "../Componnet/Notess";
import { useState } from "react";

export default function Home() {
  const { loading } = useLoading();
  const [limit] = useState(5);
  const [page, setPage] = useState(1);

  
  function handlePage(newPage) {
    setPage(newPage);
  }

 
  UseFetchNote(limit, page);

  const { Notes, Noteloading } = useNote();

  if (loading) {
    return <Loading />;
  }

  return (
    <div className={style.Home}>
      {Noteloading ? (
        <Loading />
      ) : (
        <Notess note={Notes} currentPage={page} handlePage={handlePage} />
      )}
      <CreateNote />
    </div>
  );
}
