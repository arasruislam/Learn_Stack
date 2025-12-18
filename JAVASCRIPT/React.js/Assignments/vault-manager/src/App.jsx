import Footer from "./components/Footer";
import Header from "./components/Header";
import VaultForm from "./vault/VaultForm";
import VaultStore from "./vault/VaultStore";

function App() {
  return (
    <>
      <Header />
      <VaultForm />
      <VaultStore />
      <Footer />
    </>
  );
}

export default App;
