  import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

  import Header from "./components/Header";
  import Footer from "./components/Footer";

  import GenerateCertificate from "./pages/GenerateCertificate";
  import Admin from "./pages/Admin";
  import ViewCertificate from "./pages/ViewCertificate";

  function App() {
    return (
      <BrowserRouter>

        <Header />

        <Routes>

          <Route
            path="/"
            element={
              <GenerateCertificate />
            }
          />

          <Route
            path="/admin"
            element={<Admin />}
          />

          <Route
            path="/certificate/:id"
            element={
              <ViewCertificate />
            }
          />

        </Routes>

        <Footer />

      </BrowserRouter>
    );
  }

  export default App;