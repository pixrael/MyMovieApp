import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { authApi } from '../../api/authApi';
import store from '../../app/store';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function LoggedGuestButton() {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout = () => {
        store.dispatch(authApi.util.resetApiState())
        setAnchorEl(null);
    };

    const redirectToMyList = ()=>{
        navigate('/mylist');
    }

    return (
        <>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                variant="contained" disableElevation
            >
                Logged as guest
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={redirectToMyList}>My list</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
        </>
    );
}
