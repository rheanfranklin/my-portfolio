import About from "../(sections)/About";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="page">
      <Navbar></Navbar>
      <About></About>
    </div>
  );
}