import { Box, CircularProgress } from "@mui/material";

export function Loading() {
  return (
    <Box>
      <CircularProgress size={25} />
    </Box>
  );
}
