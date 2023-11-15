import './App.css'
import CreatePage from './pages/CreatePage.js'
import EdidPage from './pages/EdidPage.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreatePage />} />
		<Route path='/edid' element={<EdidPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
