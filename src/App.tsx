import { CssBaseline } from "@mui/material";
import { Box } from "@mui/system";
import BottomNav from "./components/BottomNav";
import Header from "./components/Header";
import Orders from "./components/Orders";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header title="Заказы" />
      <Orders />
      <BottomNav />
    </Box>
  );
}

export default App;
