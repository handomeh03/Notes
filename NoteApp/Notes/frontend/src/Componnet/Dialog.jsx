import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { useSaveUser } from '../Context/userContext';
export default function Dialogs({title}){
    let {open,dispatch}=useSaveUser();
    function handleClose(){
        dispatch({type:"dialog",payload:false})
    }

    return(
        <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent style={{width:"500px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center"}}>
          <DialogContentText variant='h4'  id="alert-dialog-description">
              {title}
          </DialogContentText>
        </DialogContent>
        
      </Dialog>
    );
}