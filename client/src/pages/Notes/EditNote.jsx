import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import {
  getNoteById,
  updateNote,
} from "../../services/noteService";

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNote();
  }, []);

  const fetchNote = async () => {
    try {
      const response = await getNoteById(id);

      setFormData({
        title: response.data.title,
        description: response.data.description,
      });
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to load note"
      );
    } finally {
      setLoading(false);
    }
  };

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
      await updateNote(id, formData);

      toast.success("Note Updated Successfully");

      navigate("/notes");
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Update failed"
      );
    }
  };

  if (loading) {
    return (
      <h1 className="text-center text-2xl mt-10">
        Loading...
      </h1>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6">
      <h1 className="text-3xl font-bold mb-6">
        Edit Note
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-2 font-medium">
            Title
          </label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">
            Description
          </label>

          <textarea
            rows="8"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
        >
          Update Note
        </button>
      </form>
    </div>
  );
};

export default EditNote;