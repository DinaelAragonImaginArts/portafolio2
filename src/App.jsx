import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Context from './Context/Context';
import ContextLayout from './layout/ContextLayout';
import About from "./pages/About";
import Home from './pages/Home';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Context>
          <Routes>
            <Route path="/" element={<ContextLayout />} >
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </Context>
      </BrowserRouter>
    </>
  )
}

export default App;