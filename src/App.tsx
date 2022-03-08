import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Repositories } from "./pages/Repositories";
import { Users } from "./pages/User";
import { UserContextProvider } from "./context/Users";

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
            <Route path="/" element={<Users />} />
            <Route path="/repositories" element={<Repositories />} />
          </Routes>
      </UserContextProvider>
    </BrowserRouter>
  );
}

export default App;
