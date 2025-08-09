import { useSaveUser } from "../Context/userContext";

import HeaderInfo from "./HeaderInfo";
import Menu from "./Menu";

export default function Header() {
  let { user } = useSaveUser();
  return (
    <div
      className="Header"
      style={{
        background: "#0d47a1",
        display: "flex",
        justifyContent: "space-between",
        alignItems:"center",
        padding: "0.5rem",
        color: "white",
        textTransform: "capitalize",
        height: "75px",
        boxShadow: "1px 1px 10px black",
      }}
    >
      <HeaderInfo />

      <div>
        <h2>{user?.name}</h2>
      </div>
      <div
        className="menu"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Menu />
      </div>
    </div>
  );
}
