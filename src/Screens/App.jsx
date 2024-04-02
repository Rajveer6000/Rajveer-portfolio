import GenricFooter from "../components/GenricFooter";
import Leftnavbar from "../components/Leftnavbar";
import Navbar from "../components/Navbar";
import Rightnavbar from "../components/Rightnavbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-between ">
        <Leftnavbar />
        <div className="border-2 border-red-600 mx-32 h-[700px] w-full">
          <h1>App</h1>
        </div>
        <Rightnavbar />
      </div>

      <GenricFooter />
    </div>
  );
}

export default App;
