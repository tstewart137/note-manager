import { SearchBar } from "components/SearchBar/SearchBar";
import { NoteList } from "containers/NoteList/NoteList";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export function NoteBrowse(props) {
  const [searchText, setSearchText] = useState("");
  const noteList = useSelector((store) => store.notesSlice.noteList);
  const filteredList = noteList.filter((note) => {
    const containsTitle = note.title
      .toUpperCase()
      .includes(searchText.trim().toUpperCase());

    const containsContent = note.content
      .toUpperCase()
      .includes(searchText.trim().toUpperCase());

    return containsTitle || containsContent;
  });
  return (
    <>
      <div className="row justify-content-center mb-5">
        <div className="col-sm-12 col-md-4">
          <SearchBar
            placeholder="Search your notes..."
            onTextChange={setSearchText}
          />
        </div>
      </div>

      {noteList?.length === 0 && (
        <div className="d-flex justify-content-center">
          <span>
            You don't have any notes yet. Do you want to{" "}
            <Link to="/note/new"> create one?</Link>
          </span>
        </div>
      )}
      <NoteList noteList={filteredList} />
    </>
  );
}