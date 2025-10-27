import { Link } from "react-router";

function App() {
  const base = import.meta.env.BASE_URL;
  const pdfUrl = `${base}docs/how_to_use.pdf`;

  return (
    <div className="min-h-screen bg-background-primary flex flex-col items-center justify-center">
      <div>
        <img
          className="w-[300px] md:w-[500px]"
          src="images/ChaCheck_logo.png"
          alt="logo"
          draggable="false"
        />
      </div>

      <div className="mt-14 md:mt-10 flex flex-col items-center space-y-4 md:space-y-6">
        <Link to="/check">
          <button className="bg-background-green-tea text-text-white border-4 border-background-green-tea font-bold h-12 w-60 text-lg md:text-xl md:h-14 md:w-72 rounded-3xl cursor-pointer hover:bg-white hover:text-background-green-tea transition duration-300">
            เริ่มต้นใช้งาน
          </button>
        </Link>

        <button
          className="bg-white text-text-secondary border-4 border-text-secondary font-bold h-12 w-60 text-lg md:text-xl md:h-14 md:w-72 rounded-3xl cursor-pointer hover:bg-text-secondary hover:text-white transition duration-300"
          onClick={() => window.open(pdfUrl, "_blank", "noreferrer")}
        >
          คู่มือการใช้งาน 💡
        </button>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScXTPDrVulr0EqENs-uJYpXLRAAjr5mylTdv6Ftv6t99HY4WA/viewform"
          target="_blank"
          className="font-bold text-lg md:text-xl text-text-primary underline underline-offset-4 hover:opacity-80 transition duration-300 hover:scale-105"
        >
          แบบฟอร์มประเมินความพึงพอใจ
        </a>
      </div>
    </div>
  );
}

export default App;
