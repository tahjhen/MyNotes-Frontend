import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
} from "@mui/material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
});

const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("To-Dos");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }

    if (title && details) {
      // console.log(title, details, category);
      fetch("https://my-notes-react-app-api.herokuapp.com/todos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
        //body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }),
      }).then(() => navigate("/"));
    }
  };

  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h6" component="h2" gutterBottom>
        Create a New Note
      </Typography>
      <form
        //className={classes.field}
        novaildate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          margin="normal"
          label="Note Title"
          variant="outlined"
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          margin="normal"
          label="Details"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />
        <FormControl margin="normal">
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <FormControlLabel
              control={<Radio />}
              label="To-Dos"
              value="To-Dos"
            />
            <FormControlLabel control={<Radio />} label="Work" value="Work" />
            <FormControlLabel
              control={<Radio />}
              label="Reminders"
              value="Reminders"
            />
          </RadioGroup>

          <Button
            margin="normal"
            type="submit"
            color="primary"
            variant="contained"
            endIcon={<KeyboardArrowRightIcon />}
            onClick={() => console.log("clicked")}
          >
            Submit
          </Button>
        </FormControl>
      </form>
    </Container>
  );
};

export default Create;
