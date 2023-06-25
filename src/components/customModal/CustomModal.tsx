import { Box, Modal } from "@mui/material";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 720, 
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 1,
};

function CustomModal({ show, open, close, children }: { show: boolean, open: Function, close: Function, children: any }) {

    return (<Modal
        open={show}
        onClose={() => close()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            {children}
        </Box>
    </Modal >)
}

export default CustomModal;