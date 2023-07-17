import Navbar from "./components/navbar/Navbar";
import "./App.css";
import ContactHeader from "./components/contactheader/ContactHeader";
import Form from "./components/contactform/Form";

const App = () => {
  return (
    <div>
      <Navbar />
      <ContactHeader />
      <Form />
    </div>
  );
};

export default App;
