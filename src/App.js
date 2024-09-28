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
import ArticlesPage from "./components/ArticlesPage";
import HowItWorks from "./components/HowItWorks";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import RecordsProjectDetails from "./components/RecordsProjectDetails";

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
          <Route exact path='/articles' element={<ArticlesPage />} />
          <Route exact path='/how-it-works' element={<HowItWorks />} />
          <Route exact path='/sign-in' element={<SignIn />} />
          <Route exact path='/sign-up' element={<SignUp />} />
          <Route exact path='/records-project-details/:slugs' element={<RecordsProjectDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
