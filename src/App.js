import "./styles.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Best from "./components/best/Best";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Best />
    </div>
  );
}
