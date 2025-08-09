import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { UseDelete } from "../hooks/useDeleteNote";
import { useState } from "react";
import { Useupdatenote } from "../hooks/useupdate";
import Dialogs from "./dialog";

export default function SingleNote({ id, title, description }) {
  let { handleDeleteNote } = UseDelete();
  let { error,handleUpdateNnote } = Useupdatenote();

  let [subTitle, setsubTitle] = useState("");
  let [subdecription, setsubdecription] = useState("");
  let [open, setopen] = useState(false);

  function handleupdate(e) {
    e.preventDefault();
    handleUpdateNnote(id, subTitle, subdecription);
    setopen(false);
  }

  return (
    <div className="WorkOut" style={{ marginBottom: "1rem" }}>
      <Card style={{ boxShadow: "1px 1px 10px #0d47a1", borderRadius: "1rem" }}>
        <CardActionArea
          sx={{
            height: "100%",
            "&[data-active]": {
              backgroundColor: "action.selected",
              "&:hover": {
                backgroundColor: "action.selectedHover",
              },
            },
          }}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#0d47a1",
              gap: "1rem",
            }}
            sx={{ height: "100%" }}
          >
            <div>
              <Typography variant="h4" component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="#0d47a1">
                {description}
              </Typography>
            </div>

            <div
              style={{
                marginRight: "1rem",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton
                onClick={() => {
                  setopen(true);
                }}
                aria-label="delete"
                size="medium"
              >
                <EditIcon style={{ color: "#0d47a1" }} fontSize="inherit" />
              </IconButton>

              <IconButton
                onClick={() => {
                  handleDeleteNote(id);
                }}
                aria-label="delete"
                size="medium"
              >
                <DeleteIcon style={{ color: "red" }} fontSize="inherit" />
              </IconButton>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
      {/*for input to make update*/}
      <Dialog open={open}>
        <DialogTitle>✏️ Edit Note (Title and Description)</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can update the title and description of your note below
          </DialogContentText>
          <form id="subscription-form">
            <TextField
              autoFocus
              required
              margin="dense"
              id="title"
              name="title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
              value={subTitle}
              onChange={(e) => {
                setsubTitle(e.target.value);
              }}
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="description"
              name="description"
              label="description"
              type="text"
              fullWidth
              variant="standard"
              value={subdecription}
              onChange={(e) => {
                setsubdecription(e.target.value);
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setopen(false);
            }}
          >
            Cancel
          </Button>
          <Button onClick={handleupdate} type="submit" form="subscription-form">
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/*for error mesage*/}
      <Dialogs title={error}/>
    </div>
  );
}
