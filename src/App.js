import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ForArtists from "./components/ForArtists";
import ForFans from "./components/ForFans";
import RecordsPage from "./components/RecordsPage";
import CassatesPage from "./components/CassatesPage";
import StoriesPage from "./components/StoriesPage";
import QratesCuratedPage from "./components/QratesCuratedPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/for-artists' element={<ForArtists />} />
          <Route exact path='/for-fans' element={<ForFans />} />
          <Route exact path='/records' element={<RecordsPage />} />
          <Route exact path='/cassates' element={<CassatesPage />} />
          <Route exact path='/stories' element={<StoriesPage />} />
          <Route exact path='/qrates-curated' element={<QratesCuratedPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
