import { Link } from "react-router-dom";

const NoteCard = ({ note, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <h2 className="text-xl font-bold">{note.title}</h2>

      <p className="text-gray-600 mt-3">
        {note.description}
      </p>

      <div className="flex gap-3 mt-5">
        <Link
          to={`/notes/edit/${note._id}`}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Edit
        </Link>

        <button
          onClick={() => onDelete(note._id)}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;