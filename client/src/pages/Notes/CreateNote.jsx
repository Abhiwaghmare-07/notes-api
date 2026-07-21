import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { createNote } from "../../services/noteService";

const CreateNote = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description) {
      toast.error("Please fill all fields");
      return;
    }

    try {
      await createNote(formData);

      toast.success("Note Created");

      navigate("/notes");
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow rounded-lg p-6">
      <h1 className="text-3xl font-bold mb-6">
        Create Note
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border p-3 rounded"
        />

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows="8"
          placeholder="Description"
          className="w-full border p-3 rounded"
        />

        <button
          className="bg-blue-600 text-white px-6 py-3 rounded"
        >
          Save Note
        </button>
      </form>
    </div>
  );
};

export default CreateNote;