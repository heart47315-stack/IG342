import Header from "./components/Header.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import Button from "./components/Button.jsx";
import Footer from "./components/Footer.jsx";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main className="content">
        <div className="row">
          <ProfileCard name="จุฑามาศ" />
          <Button text="จิน" />
        </div>

        <div className="row">
          <ProfileCard name="คณะ" />
          <Button text="วิศวะคอมพิวเตอร์" />
        </div>

        <div className="row">
          <ProfileCard name="Student ID" />
          <Button text="66112366" />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;