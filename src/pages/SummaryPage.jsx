import React from "react";
import { Link } from "react-router";

const SummaryPage = () => {
  return (
    <div className="min-h-screen bg-background-secondary flex flex-col">
      {/* Header */}
      <header className="flex justify-center pt-5">
        <Link to="/" aria-label="กลับหน้าแรก">
          <img
            className="w-28 max-h-[74px]"
            src="images/ChaCheck_logo.png"
            alt="ChaCheck logo"
            draggable="false"
          />
        </Link>
      </header>

      {/* Content */}
      <main className="flex-1 flex flex-col items-center pb-14">
        <div className="w-full max-w-screen-lg px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <h1 className="mt-4 mb-3 text-3xl font-bold text-text-primary bg-white shadow-sm px-6 py-2 rounded-xl inline-block">
              สรุปผล
            </h1>
          </div>

          {/* Graph */}
          <figure className="w-full">
            <img
              className="w-full h-auto rounded-xl shadow-sm"
              src="images/graph-cha-check.jpg"
              alt="กราฟเปรียบเทียบปริมาณน้ำตาลของชาไทยและชาเขียวจากหลายแบรนด์"
              draggable="false"
            />
            <figcaption className="mt-2 text-center text-sm text-text-secondary/80">
              หน่วยเป็นกรัม/100 กรัม (g/100g)
            </figcaption>
          </figure>

          {/* Summary card */}
          <section className="mt-6 w-full">
            <div className="rounded-2xl bg-white/80 shadow-sm backdrop-blur p-6 sm:p-8">
              <div className="grid gap-8 md:grid-cols-2">
                {/* ชาไทย */}
                <div>
                  <h2 className="text-xl font-semibold text-text-primary">
                    ชาไทย
                  </h2>
                  <ul className="mt-3 space-y-2 text-text-primary/90">
                    <li className="flex flex-wrap items-center gap-2">
                      <span>มากสุด:</span>
                      <span className="font-semibold">ชาตรามือ</span>
                      <span className="inline-block rounded-full border px-3 py-1 text-sm">
                        29.50 g/100g
                      </span>
                    </li>

                    <li className="flex flex-wrap items-center gap-2">
                      <span>น้อยสุด:</span>
                      <span className="font-semibold">อินทนิน</span>
                      <span className="inline-block rounded-full border px-3 py-1 text-sm">
                        8.77 g/100g
                      </span>
                    </li>

                    <li className="text-sm text-text-secondary mt-1">
                      มากกว่าน้อยสุดประมาณ{" "}
                      <span className="font-semibold">3.4 เท่า</span>
                    </li>
                  </ul>
                </div>

                {/* ชาเขียว */}
                <div>
                  <h2 className="text-xl font-semibold text-text-primary">
                    ชาเขียว
                  </h2>
                  <ul className="mt-3 space-y-2 text-text-primary/90">
                    <li className="flex flex-wrap items-center gap-2">
                      <span>มากสุด:</span>
                      <span className="font-semibold">FUKU</span>
                      <span className="inline-block rounded-full border px-3 py-1 text-sm">
                        30.07 g/100g
                      </span>
                    </li>

                    <li className="flex flex-wrap items-center gap-2">
                      <span>น้อยสุด:</span>
                      <span className="font-semibold">ONE TO TWO</span>
                      <span className="inline-block rounded-full border px-3 py-1 text-sm">
                        12.57 g/100g
                      </span>
                    </li>

                    <li className="text-sm text-text-secondary mt-1">
                      มากกว่าน้อยสุดมากกว่า{" "}
                      <span className="font-semibold">2 เท่า</span>
                    </li>
                  </ul>
                </div>
              </div>

              <hr className="my-6 border-text-secondary/10" />

              <p className="text-text-primary/90 leading-relaxed">
                โดยรวม{" "}
                <span className="font-semibold">ปริมาณน้ำตาลแตกต่างกันมาก</span>{" "}
                ระหว่างแบรนด์ ทั้งชาไทยและชาเขียว และโดยเฉลี่ย{" "}
                <span className="font-semibold">
                  ชาไทยมีน้ำตาลสูงกว่าชาเขียวเล็กน้อย
                </span>
                .
                <br className="hidden sm:block" />
                แบรนด์ที่ควรระวังเรื่องน้ำตาล:
                <span className="font-semibold">
                  {" "}
                  ชาตรามือ (ชาไทย)
                </span> และ{" "}
                <span className="font-semibold">FUKU (ชาเขียว)</span>
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SummaryPage;
