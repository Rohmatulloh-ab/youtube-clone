/* eslint-disable no-unreachable */
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
// import DetailCard from './components/DetailCard';
import NotFound from "./components/NotFound";
import Layout from "./layout/Layout";
// import DetailCard from "./components/DetailCard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/videos/:id" element={<Detail />} />

        <Route path="search/:keyword" element={<Search />} />
        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
