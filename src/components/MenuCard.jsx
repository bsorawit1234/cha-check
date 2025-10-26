import React from "react";

const MenuCard = ({ type, menu, imgPath, tsp, volume, brix, sugar }) => {
  const base = import.meta.env.BASE_URL;
  const resolve = (p) =>
    p?.startsWith("http") ? p : `${base}${(p || "").replace(/^\/+/, "")}`; // strip leading "/" then prefix base

  const tspShow = (tsp) => {
    const totalTsp = Math.max(0, tsp);
    const wholeTsp = Math.floor(totalTsp);
    const hasHalfTsp = totalTsp % 1 !== 0;

    const fullTspImages = Array(wholeTsp)
      .fill(0)
      .map((_, index) => (
        <img
          key={index}
          src={resolve("images/teaspoon-full.png")}
          alt="full teaspoon"
          className="w-7 h-7 md:w-8 md:h-8"
          draggable="false"
        />
      ));

    const halfTspImage = hasHalfTsp ? (
      <img
        key="half"
        src={resolve("images/teaspoon-half.png")}
        alt="half teaspoon"
        className="w-7 h-7 md:w-8 md:h-8"
        draggable="false"
      />
    ) : null;

    const allTspImages = halfTspImage
      ? [...fullTspImages, halfTspImage]
      : fullTspImages;

    if (totalTsp > 7) {
      return (
        <div className="flex items-center justify-center space-x-2">
          <img
            src={resolve("images/teaspoon-full.png")}
            alt="teaspoon"
            className="w-7 h-7 md:w-8 md:h-8"
            draggable="false"
          />
          <span className="text-lg font-semibold text-text-primary">
            x {totalTsp}
          </span>
        </div>
      );
    }
    return (
      <div className="flex flex-wrap gap-1 justify-center items-center">
        {allTspImages}
      </div>
    );
  };

  const headerBg =
    type === "thai-tea" ? "bg-background-thai-tea" : "bg-background-green-tea";

  return (
    <div
      className={`
        bg-white rounded-2xl text-center shadow-card
        flex flex-col items-center
        w-full
        max-w-[340px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px]
      `}
    >
      <div
        className={`w-full rounded-t-2xl ${headerBg} text-white font-bold
          text-xl md:text-2xl lg:text-4xl py-5`}
      >
        {menu}
      </div>

      <div className="my-5 px-6 w-full flex justify-center">
        <img
          className="max-h-[180px] md:max-h-[200px] object-contain"
          src={resolve(
            imgPath?.startsWith("/") ? imgPath : `images/${imgPath}`
          )}
          alt={menu}
          draggable="false"
        />
      </div>

      <div className="mb-4 md:mb-6">
        <div>{tspShow(tsp)}</div>
        <div className="text-base md:text-xl font-semibold text-text-primary mt-1">
          น้ำตาลประมาณ {tsp} ช้อนชา
        </div>
      </div>

      <div className="w-full px-6 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className={`rounded-xl ${headerBg} text-white py-2 px-3`}>
            <div className="flex md:flex-col items-center justify-center gap-2">
              <span className="material-symbols-outlined" aria-hidden>
                water_full
              </span>
              <div className="font-semibold text-[15px]">
                ปริมาณ: {volume} g
              </div>
            </div>
          </div>

          <div className={`rounded-xl ${headerBg} text-white py-2 px-3`}>
            <div className="flex md:flex-col items-center justify-center gap-2">
              <span className="material-symbols-outlined" aria-hidden>
                gas_meter
              </span>
              <div className="font-semibold text-[15px]">% BRIX: {brix}</div>
            </div>
          </div>

          <div className={`rounded-xl ${headerBg} text-white py-2 px-3`}>
            <div className="flex md:flex-col items-center justify-center gap-2">
              <span className="material-symbols-outlined" aria-hidden>
                deployed_code
              </span>
              <div className="font-semibold text-[15px]">น้ำตาล: {sugar} g</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
