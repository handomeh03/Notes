import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import TitleIcon from "@mui/icons-material/Title";
import DescriptionIcon from "@mui/icons-material/Description";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react"
import { UseCreateNote } from "../hooks/useCreateNote";
export default function CreateNote() {
  let [title, settitle] = useState("");
  let [decription, setDescription] = useState("");
  let {createNote}=UseCreateNote();
  
  async function handleCreateNote(e) {
    e.preventDefault();
     createNote(title,decription);
     settitle("");
     setDescription("");
  }
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "2rem",
          gap: "2rem",
          borderRadius: "1rem",
          boxShadow: "1px 1px 10px #0d47a1",
          width: "70%",
          margin: "auto",
          marginTop: "1rem",
        }}
      >
        <h2 style={{ fontWeight: "bold", color: "#0d47a1" }}>Create Note</h2>
        <TextField
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
          id="input-with-icon-textfield"
          label="Title"
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <TitleIcon sx={{ color: "#0d47a1" }} />
              </InputAdornment>
            ),
            sx: {
              color: "#0d47a1",
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#0d47a1",
            },
          }}
          sx={{
            "& .MuiInput-underline:before": {
              borderBottomColor: "#0d47a1",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#0d47a1",
            },
            "& input": {
              color: "black",
            },
          }}
        />
        <TextField
          value={decription}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          id="input-with-icon-textfield"
          label="Description"
          variant="standard"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <DescriptionIcon sx={{ color: "#0d47a1" }} />
              </InputAdornment>
            ),
            sx: {
              color: "#0d47a1",
            },
          }}
          InputLabelProps={{
            sx: {
              color: "#0d47a1",
            },
          }}
          sx={{
            "& .MuiInput-underline:before": {
              borderBottomColor: "#0d47a1",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#0d47a1",
            },
            "& input": {
              color: "black",
            },
          }}
        />
        <Button
          onClick={handleCreateNote}
          style={{ background: "#0d47a1" }}
          variant="contained"
          endIcon={<AddIcon />}
        >
          Add
        </Button>
      </form>
    </div>
  );
}
