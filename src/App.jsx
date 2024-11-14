import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Pet from "./pages/Pet.jsx";
import Services from "./pages/Services.jsx";
import Favorites from "./pages/Favorites.jsx";
import Profile from "./pages/Profile.jsx";
import PetDetail from "./pages/PetDetail.jsx";
import FavoritePet from "./pages/FavoritePet.jsx";
import ManagePet from "./pages/ManagePet.jsx";

function App() {
 return (
  <>
   <Router>
    <Routes>
     <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="pet" element={<Pet />} />
      <Route path="pet/:id" element={<PetDetail />} />
      <Route path="fav-pet/:id" element={<FavoritePet />} />
      <Route path="services" element={<Services />} />
      <Route path="favorites" element={<Favorites />} />
      <Route path="profile" element={<Profile />} />
      <Route path="profile/manage-pet" element={<ManagePet />} />
     </Route>
    </Routes>
   </Router>
  </>
 );
}

export default App;
