import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import SettingsIcon from '@mui/icons-material/Settings';
import { updateStatus } from '../../helpers/APICalls/request';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { editButtonStyles } from './BookingStyles/EditButton';
import { useAuth } from '../../context/useAuthContext';

export default function EditButton({ requestId, updateStatusState, sectionName }) {
  const pageClasses = editButtonStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { loggedInUser } = useAuth();
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickHandler = async (status) => {
    const { success } = await updateStatus(status, requestId);
    if (success) {
      const id = success['request']._id;
      if (sectionName === 'next booking') updateStatusState(id, status, 'nextBooking');
      else if (sectionName === 'current bookings') updateStatusState(id, status, 'currentBookings');
      else if (sectionName === 'past bookings') updateStatusState(id, status, 'pastBookings');
      handleClose();
    }
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box>
      <Typography onClick={handleClick}>
        <SettingsIcon className={pageClasses.icon} />
      </Typography>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Box className={pageClasses.popoverWrapper}>
          {loggedInUser?.isSitter ? (
            <>
              <Button onClick={() => onClickHandler('accepted')}>Accept</Button>
              <Button onClick={() => onClickHandler('declined')}>Decline</Button>
            </>
          ) : (
            <Button>Edit</Button>
          )}
        </Box>
      </Popover>
    </Box>
  );
}
