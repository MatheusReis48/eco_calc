import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import About from './pages/About/About';
import Calculator from './pages/Calculator/Calculator';
import NotFoundPage from './pages/NotFound/NotFound';
import Header from './components/header/header';
import './index.css';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/About' element={<About />} />
            <Route path='/calculator' element={<Calculator />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;