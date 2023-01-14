import { Box } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import route from "./Router/Route";

function App() {
  return (
    <Box>
      <RouterProvider router={route}></RouterProvider>
    </Box>
  );
}

export default App;
