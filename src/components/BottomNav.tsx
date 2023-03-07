import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import {
  AccountCircle,
  FormatListBulleted,
  Settings,
} from "@mui/icons-material";

const BottomNav = () => {
  return (
    <Paper
      sx={{
        position: "fixed",
        width: "100%",
        bottom: 0,
        pb: "env(safe-area-inset-bottom)",
      }}
      elevation={3}
    >
      <BottomNavigation showLabels>
        <BottomNavigationAction label="Профиль" icon={<AccountCircle />} />
        <BottomNavigationAction label="Заказы" icon={<FormatListBulleted />} />
        <BottomNavigationAction label="Настройки" icon={<Settings />} />
      </BottomNavigation>
    </Paper>
  );
};

export default BottomNav;
