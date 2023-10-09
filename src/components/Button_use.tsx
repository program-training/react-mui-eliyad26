import { Button, Stack } from "@mui/material";

// import SendIcon from "@mui/icons-material";
const Button_use = () => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="outlined"
        onClick={() => {
          console.log("clicked!");
        }}
      >
        Send
      </Button>
    </Stack>
  );
};
export default Button_use;
