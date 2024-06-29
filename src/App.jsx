import NavBar from "./components/nav-bar/navBar";

function App() {
  return (
    <div className=" w-screen h-screen bg-slate-700">
      <NavBar />
      <main className="container w-full h-screen bg-blue-950 ">
        <div className="w-full h-72 flex justify-center items-center p-4 bg-black mt-8">
          <div className="min-w-32 h-32 bg-orange-400 rounded-full"></div>
          <p className="text-white ml-6 text-xs">
            <b>AúdioBook</b>
            <br /> dolor sit amet consectetur adipisicing elit. Similique vel
            sed facilis veritatis delectus,{" "}
          </p>
        </div>
      </main>
      <div className="curtain w-full fixed top-96 h-full bg-orange-400"></div>
    </div>
  );
}

export default App;
