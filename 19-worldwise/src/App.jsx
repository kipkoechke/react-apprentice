import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "../components/CityList";
import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";
import City from "../components/City";
import Form from "../components/Form";

const BASE_URL = "http://localhost:8000";
/**
 * The root component of the app.
 *
 * This is a function component that uses React hooks. It fetches the list of
 * cities from the backend and renders the navigation and routing.
 *
 * @returns {JSX.Element} The root component
 */
function App() {
  /** The list of cities fetched from the backend */
  const [cities, setCities] = useState([]);
  /** Whether the app is currently loading data from the backend */
  const [isLoading, setIsLoading] = useState(false);

  // Fetch the list of cities from the backend when the component mounts
  useEffect(() => {
    /**
     * Fetch the list of cities from the backend.
     *
     * @returns {Promise<void>} A promise that resolves when the data is fetched
     */
    async function fetchCities() {
      try {
        setIsLoading(true);
        const response = await fetch(`${BASE_URL}/cities`);
        const data = await response.json();
        setCities(data);
      } catch (error) {
        alert("There was an error loading data...");
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          {/* Redirect to the cities page when the user navigates to the app */}
          <Route index element={<Navigate replace to="cities" />} />
          {/* Render the list of cities */}
          <Route
            path="cities"
            element={<CityList cities={cities} isLoading={isLoading} />}
          />
          {/* Render a single city */}
          <Route path="cities/:id" element={<City />} />
          {/* Render the list of countries */}
          <Route
            path="countries"
            element={<CountryList cities={cities} isLoading={isLoading} />}
          />
          {/* Render the form to add a new city */}
          <Route path="form" element={<Form />} />
        </Route>
        {/* Render the 404 page when the user navigates to a non-existent page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
