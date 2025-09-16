import React from "react";
interface option {
  label: string;
  icon?: React.ReactNode;
  img?: string;
}
interface listProps {
  desc: string;
  price: number;
  statusList: option[];
}
const ListStatus:React.FC<listProps> = ({ desc, price, statusList }) => {
  return (
    <div>
      <div className="mb-5 flex flex-wrap sm:flex-nowrap gap-4 sm:gap-1">
        <div className="bg-wrapper w-full flex justify-between flex-wrap items-center gap-1">
          <h5 className="!text-lg md:!text-xl font-bold">List Status:</h5>
          <div className="flex gap-1 flex-wrap items-center">
            {statusList?.map((list, i) => (
              <div
                key={i}
                className="bg-[#F3F8FB] rounded-[1000px] inline-flex gap-1 items-center p-2 text-sm font-normal"
              >
                {list.icon && list.icon}
                {list.img && (
                  <img src={list.img} alt="featured icon" className="w-4 h-4" />
                )}
                <span>{list.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-wrapper w-full sm:w-auto text-lg md:text-xl font-normal flex gap-1 items-center">
          <span>Price:</span>
          <h5 className="!text-lg md:!text-xl font-bold">${price}</h5>
        </div>
      </div>
      <div className="bg-wrapper mb-5">
        <h5 className="!text-lg md:!text-xl font-bold mb-4">Description:</h5>
        <div className="text-sm font-normal bg-[#F3F8FB] rounded-lg p-4">
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default ListStatus;
