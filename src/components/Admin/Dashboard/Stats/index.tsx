import React from "react";

interface StatItem{
  icon:string;
  count:string | number;
  desc:string;
}
interface StatsProps {
  data: StatItem[];
}

const Stats : React.FC<StatsProps> = ({ data }) => {
  return (
    <>
      {data?.map((item, i) => (
        <div key={i} className="flex justify-between items-center">
          <div className="p-4 font-roboto text-base text-[#444444]">
            <div className="flex items-baseline gap-2 mb-2">
              <div className="w-12 h-12 rounded-full bg-[#F0E2C980] flex justify-center items-center">
                <img
                  src={item.icon}
                  alt="stats"
                  className="w-[23px] h-[23px]"
                />
              </div>
              <h1 className="sm:!text-3xl !text-2xl !text-black">
                {item.count}
              </h1>
            </div>
            <p>{item.desc}</p>
          </div>
          {i !== data.length - 1 && (
            <div
              className="w-[2px] h-[70px] py-6 mr-2 hidden lg:block"
              style={{
                background:
                  "linear-gradient(180deg, rgba(139,106,58,0) 0%, rgba(204,185,159,0.4) 50%, rgba(139,106,58,0) 100%)",
              }}
            ></div>
          )}
        </div>
      ))}
    </>
  );
};

export default Stats;
