import { Route, Routes } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from './Routes/Contact';
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs"
import Footer from "./Components/Footer";
import { ThemeProvider } from './Context/ThemeContext'; // Importa el ThemeProvider desde la carpeta Context



function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipe/:id' element={<Detail />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='/destacado' element={<Favs />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
