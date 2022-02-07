import React, { useState, useEffect } from "react";
import { Paper, Grid, Container } from "@mui/material";
import NoteCard from "../components/NoteCard";
//import Masonry from "@mui/lab/Masonry";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch("https://my-notes-react-app-api.herokuapp.com/todos")
      .then((response) => response.json())
      .then((data) => setNotes(data));
  }, []);

  // Delete Request

  const handleDelete = async (_id) => {
    console.log("clicked delete");
    await fetch("https://my-notes-react-app-api.herokuapp.com/todos" + _id, {
      method: "DELETE",
    });
    const newNotes = notes.filter((note) => note._id !== _id);
    setNotes(newNotes);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid item key={note._id} xs={12} md={4} lg={4}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Notes;
