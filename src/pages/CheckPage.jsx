import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router";
import MenuCard from "../components/MenuCard";
import SearchBar from "../components/SearchBar";

const CheckPage = () => {
  const [data, setData] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  const base = import.meta.env.BASE_URL;

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${base}data.json`);
        if (!res.ok) throw new Error("Failed to load data.json");
        const json = await res.json();
        setData(json);
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    })();
  }, [base]);

  const options = useMemo(
    () => data.map((b) => ({ value: b.brand, label: b.brand })),
    [data]
  );

  const brandObj = useMemo(
    () => data.find((b) => b.brand === selectedBrand) || null,
    [data, selectedBrand]
  );

  return (
    <div className="min-h-screen bg-background-secondary flex flex-col">
      <header className="flex justify-center pt-5">
        <Link to="/">
          <img
            className="w-28 max-h-[74px]"
            src="images/ChaCheck_logo.png"
            alt="ChaCheck logo"
            draggable="false"
          />
        </Link>
      </header>

      <main className="flex-grow flex flex-col items-center px-4">
        <div className="w-full max-w-2xl mt-4">
          <SearchBar
            options={options}
            value={selectedBrand}
            onChange={setSelectedBrand}
            placeholder="Select a brand…"
          />
        </div>

        <div className="w-full mt-8 mb-2 flex flex-col items-center gap-10 lg:flex-row lg:justify-center lg:items-start lg:gap-16">
          {!loading &&
            !err &&
            brandObj &&
            brandObj.menu.map((m) => (
              <MenuCard
                key={`${brandObj.brand}-${m.type}`}
                type={m.type}
                menu={m.title}
                imgPath={m.img_path}
                tsp={m.tsp}
                volume={m.volume}
                brix={m.brix}
                sugar={m.sugar}
              />
            ))}
        </div>
      </main>

      <footer className="text-center mt-auto space-y-3 pb-12">
        <div className="text-text-warning font-semibold text-lg md:text-2xl">
          *WHO แนะนำให้บริโภคน้ำตาลไม่เกิน 6 ช้อนชาต่อวัน
        </div>
        <Link to="/guide">
          <button className="bg-white text-text-secondary border-4 border-text-secondary font-bold h-12 w-60 text-lg md:text-xl md:h-14 md:w-72 rounded-3xl cursor-pointer hover:bg-text-secondary hover:text-white transition duration-300">
            คู่มือการใช้งาน 💡
          </button>
        </Link>
        <div className="mt-2">
          <a
            href="https://example.com/survey"
            className="font-bold text-lg md:text-xl text-text-primary underline underline-offset-4 hover:opacity-80 transition duration-300 hover:scale-105"
          >
            แบบฟอร์มประเมินความพึงพอใจ
          </a>
        </div>
      </footer>
    </div>
  );
};

export default CheckPage;
