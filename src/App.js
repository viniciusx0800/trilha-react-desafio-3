import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Feed } from "./pages/feed";
import { Singin } from "./pages/signin";
import { Home } from './pages/home'
import { Login } from './pages/login'
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <Router>
     <GlobalStyle />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/signin" element={<Singin />} />
     </Routes >
    </Router>
  );
}

export default App;
