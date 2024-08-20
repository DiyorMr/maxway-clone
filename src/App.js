import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/menu/Menu";
import Branches from "./pages/branches/Branches";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";
import Layout from "./pages/layout/Layout";

export default function () {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Menu />} />
            <Route path="branches" element={<Branches />} />
            <Route path="about" element={<About />} />
            <Route path="contacts" element={<Contacts />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}
