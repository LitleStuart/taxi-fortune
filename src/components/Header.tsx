import { AppBar, Typography } from "@mui/material";

const Header = ({ title }: { title: string }) => {
  return (
    <AppBar color="primary" position="sticky">
      <Typography variant="h4" component="h3" sx={{ p: "0.5em 16px" }}>
        Заказы
      </Typography>
    </AppBar>
  );
};

export default Header;
