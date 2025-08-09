import { createContext, useContext, useReducer } from "react";
const NoteCont = createContext();

function noteReducer(state, action) {
  switch (action.type) {
    case "fetchNote":
      return { ...state, Notes: action.payload };
    case "setLoading":
      return { ...state, Noteloading: action.payload };
    case "createNote":
      return {
        ...state,
        Notes: [action.payload, ...state.Notes],
      };
    case "clearWorkouts":
      return { ...state, Notes: [] };

    case "deletenote":
      return {
        ...state,
        Notes: state.Notes.filter((e) => e.id !== action.payload.id),
      };
    case "updatenote":
      return {
        ...state,
        Notes: state.Notes.map((e) => {
          if (e.id == action.payload.id) {
            return action.payload.note;
          } else {
            return e;
          }
        }),
      };

    default:
      return state;
  }
}
export default function NoteProvide({ children }) {
  let [state, Notedispatch] = useReducer(noteReducer, {
    Notes: [],
    Noteloading: false,
  });
  return (
    <NoteCont.Provider value={{ ...state, Notedispatch }}>
      {children}
    </NoteCont.Provider>
  );
}
export function useNote() {
  let context = useContext(NoteCont);
  if (!context) {
    throw new Error("error");
  }
  return context;
}
