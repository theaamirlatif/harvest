interface NotificationItemsProps {
  img: string;
  title: string;
  desc: string;
  time: string;
  count?: number | string;
  bg: string;
}
interface NotificationProps {
  data: NotificationItemsProps[];
}
const AllNotification: React.FC<NotificationProps> = ({ data }) => {
  return (
    <>
      {data.map((item, i) => (
        <div
          key={i}
          className="flex justify-between items-center gap-2 py-4 px-2 md:p-4 mb-5 rounded-2xl"
          style={{ background: item.bg }}
        >
          <div className="flex items-center gap-2">
            <img
              src={item.img}
              alt="noti icon"
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full"
            />
            <div className="text-[#252525CC] text-xs md:text-sm font-normal">
              <h4 className=" text-[#191E29] !text-sm font-medium">
                {item.title}
              </h4>
              <p>{item.desc}</p>
            </div>
          </div>

          <div className="flex flex-col items-end gap-2 text-xs text-[#191E29] font-medium">
            <p className="!text-xs">{item.time}</p>
            {item.count && (
              <span className="text-xs w-4 h-4 bg-[#C52707] rounded-full flex items-center justify-center text-white">
                {item.count}
              </span>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default AllNotification;
