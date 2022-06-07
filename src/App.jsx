import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import SearchHeader from "./components/SearchHeader/SearchHeader";
import ProductsList from "./components/ProductsList/ProductsList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import "./App.scss";

const App = () => (
  <div className="app">
    <header>
      <SearchHeader />
    </header>
    <section>
      <Routes>
        <Route path="/items/:id" element={<ProductDetails />} />
        <Route path="/items" element={<ProductsList />} />
        <Route path="/" element={<Outlet />} /> {/* This is to get rid of the React Router warning in console */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </section>
  </div>
);

export default App;
