import * as React from "react";
import { Backdrop } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

interface LoadingBackdropProps {
  isOpen?: boolean;
}

const LoadingBackdrop: React.FC<LoadingBackdropProps> = ({
  isOpen = false,
}) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={isOpen}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingBackdrop;
