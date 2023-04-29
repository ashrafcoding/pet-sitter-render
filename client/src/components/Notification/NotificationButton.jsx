import * as React from 'react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import useStyles from './NotificationStyles/NotificationButton';
import Box from '@mui/material/Box';
import NotificationPopover from './NotificationPopover';
import Badge from '@mui/material/Badge';


export default function NotificationButton({ notifCount, updateCount }) {
  const {classes} = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    if (!anchorEl) setAnchorEl(event.currentTarget);
    else setAnchorEl(null);
    updateCount(3);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box className={classes.wrap}>
      <Badge color="primary" badgeContent={notifCount} max={99}>
        <Button
          aria-describedby={id}
          onClick={handleClick}
          className={`${classes.authNavItemBtn} ${classes.authNavMobile}`}
          color="secondary"
          variant="text"
        >
          Notification
        </Button>
      </Badge>
      <Popover
        id="mouse-over-popover"
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        onClose={handleClose}
      >
        <NotificationPopover updateCount={updateCount} />
      </Popover>
    </Box>
  );
}
