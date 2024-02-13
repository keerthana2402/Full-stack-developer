//import { useState } from "react";
import { ColorModeContext, useMode } from "./themes";
import { CssBaseline, ThemeProvider} from "@mui/material";
import {createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from "react-router-dom";
import Dashboard from './screens/dashboard/dashboard';
import UserList from './screens/dataUpload/UserList';
import RootLayout from './RootLayout';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='/userlist' element={<UserList />} />
    </Route>
  )
)
function App() {
  const [theme, colorMode] = useMode();
  //const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <main className="content">
            <RouterProvider router={router}/>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
