import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import Loading from "../../components/ui/Loading";
import NoteCard from "../../components/ui/NoteCard";

import {
  getAllNotes,
  deleteNote,
} from "../../services/noteService";

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      const response = await getAllNotes();

      setNotes(response.data.notes);
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this note?")) return;

    try {
      await deleteNote(id);

      toast.success("Note Deleted");

      fetchNotes();
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  if (loading) return <Loading />;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">
        My Notes
      </h1>

      {notes.length === 0 ? (
        <h2>No Notes Found</h2>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {notes.map((note) => (
            <NoteCard
              key={note._id}
              note={note}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesList;