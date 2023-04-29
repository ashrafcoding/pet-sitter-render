import { makeStyles } from "tss-react/mui";

export const editButtonStyles = makeStyles()((theme) =>({
    typography: {
      padding: theme.spacing(2),
    },
    icon: {
      fontSize: "15px",
      color: theme.palette.text.secondary,
    },
    popoverWrapper: {
      display: "flex",
      flexDirection: "column",
    },
  })
);
