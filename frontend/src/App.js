import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ContactsList from "./components/ContactsList";
import AddContact from "./components/AddContact";
import ContactDetails from "./components/ContactDetails";
import EditContactDetails from "./components/EditContactDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ContactsList />} />
          <Route path="/addContact" element={<AddContact />} />
          <Route path="/contacts/:id" element={<ContactDetails />} />
          <Route path="/edit/:id" element={<EditContactDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
