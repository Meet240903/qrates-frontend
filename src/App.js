import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ForArtists from "./components/ForArtists";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/for-artists' element={<ForArtists />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
