import { useEffect } from "react";
import { useNote } from "../Context/Notescontext";
import { useSaveUser } from "../Context/userContext";

export function UseFetchNote(limit, page) {
  const { Notedispatch } = useNote();
  const { user } = useSaveUser();

  useEffect(() => {
    if (!user?.token) return;

    const fetchNote = async () => {
      try {
        Notedispatch({ type: "setLoading", payload: true });

        const res = await fetch(
          `http://localhost:8080/api/notes/getNotes?limit=${limit}&pageNumber=${page}`,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        const data = await res.json();

        if (!res.ok) {
          console.log(data.error);
        }

        if (res.ok) {
          Notedispatch({ type: "fetchNote", payload: data.Notes });
          console.log(data.Notes);
        }
      } catch (error) {
        console.log(error);
      } finally {
        Notedispatch({ type: "setLoading", payload: false });
      }
    };

    fetchNote();
  }, [limit, page, user?.token]);

  return null;
}
