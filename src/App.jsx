import { NoteAPI } from "api/note";
import { Header } from "components/Header/Header";
import { withAuthRequired } from "hoc/withAuthRequired";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { setNoteList } from "store/notes/notes-slice";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import  s from "./style.module.css"

export function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function fetchNotes() {
    const noteList = await NoteAPI.fetchAll();
    dispatch(setNoteList(noteList));
  }

  useEffect(() => {
    const unsub = NoteAPI.onShouldSyncNotes(fetchNotes);
    return () => {
      unsub();
    };
  }, []);

  return (
    <div>
      <Header />
      <div className="col-xs-12 col-sm-8 text-end">
        <ButtonPrimary className={s.buttonAdd} onClick={() => navigate("/note/new")}>
          +
        </ButtonPrimary>
      </div>
      <div style={{ padding: 50 }}>
        <Outlet />
      </div>
    </div>
  );
}

export const ProtectedApp = withAuthRequired(App);