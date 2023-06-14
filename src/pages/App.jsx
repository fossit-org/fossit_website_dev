import Nav from "../components/Nav";


function App() {
  return (
    <>
      <Nav />
      <div class="font-montserrat p-8 h-screen max-w-[1920px]">
        <div className="flex flex-col md:grid md:grid-cols-3 max-h-[700px] h-[80%] sm:h-[30%] lg:h-[50%] gap-4">
          <div className="col-span-2 h-full rounded-lg shadow-lg">
            <div class="flex flex-col justify-center items-start p-8 lg:p-16 h-full gap-4">
              <div class="flex flex-col">
              <h1 class="font-archivo text-6xl xl:text-8xl 2xl:text-9xl font-black">FOSSIT</h1>
              <p class="font-poppins text-xs lg:text-base max-w-[800px] pl-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque soluta fugiat culpa dolorum qui saepe veritatis, doloremque nostrum necessitatibus amet!</p>
              </div>
              <button class="btn text-xs">Know More</button>
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-around h-full shadow-lg rounded-lg p-8">
              <h2 class="text-2xl lg:text-3xl text-center font-black font-archivo">Current Projects</h2>
              <p class="font-montserrat text-6xl xl:text-8xl 2xl:text-9xl font-black text-center">3</p>
              <button class="btn">CONTRIBUTE</button>
          </div>  
        </div>
      </div>
    </>
  );
}

export default App;
