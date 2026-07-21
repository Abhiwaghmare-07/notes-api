import api from "../api/axios";

export const getAllNotes = (page = 1, search = "") => {
  return api.get(`/notes?page=${page}&search=${search}`);
};

export const getNoteById = (id) => {
  return api.get(`/notes/${id}`);
};

export const createNote = (noteData) => {
  return api.post("/notes", noteData);
};

export const updateNote = (id, noteData) => {
  return api.put(`/notes/${id}`, noteData);
};

export const deleteNote = (id) => {
  return api.delete(`/notes/${id}`);
};