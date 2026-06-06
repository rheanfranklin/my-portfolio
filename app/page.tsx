import Intro from "./(sections)/Intro";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-[50px] gap-5">
      <Navbar></Navbar>
      <Intro></Intro>
    </div>
  );
}