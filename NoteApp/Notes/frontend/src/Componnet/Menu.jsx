import { Link } from "react-router-dom";
import style from "../CSS/Menu.module.css";
import { useSaveUser } from "../Context/userContext";
import { useNote } from "../Context/Notescontext";

export default function Menu() {
  let { user, dispatch } = useSaveUser();
  let {Notedispatch}=useNote();
  return (
    <ul
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        listStyle: "none",
      }}
    >
      <Link to={"/"} className={style.list}>
        home
      </Link>
      <Link to={"/"} className={style.list}>
        Setting
      </Link>
      {!user ? (
        <Link to={"/login"} className={style.list}>
          login
        </Link>
      ) : (
        ""
      )}
      {user ? (
        <Link
          to={"/login"}
          className={style.list}
          onClick={() => {

            dispatch({ type: "logout" });
            Notedispatch({type:"clearWorkouts"});
            localStorage.removeItem("user");
          }}
        >
          logout
        </Link>
      ) : (
        ""
      )}
    </ul>
  );
}
