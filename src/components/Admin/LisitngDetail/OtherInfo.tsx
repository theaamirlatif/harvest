interface InfoItemsProps {
  label: string;
  value: string;
}
interface InfoProps {
  infoData: InfoItemsProps[];
}
const OtherInfo: React.FC<InfoProps> = ({ infoData }) => {
  return (
    <div className="bg-wrapper mb-5 text-xl font-normal flex flex-wrap justify-between gap-1 items-center">
      <h5 className="!text-lg md:!text-xl font-bold">Other information:</h5>
      <div className="flex flex-wrap gap-3">
        {infoData?.map((item, i) => (
          <div className="flex items-center gap-2 text-sm font-normal" key={i}>
            <span>{item.label}:</span>
            <span className="bg-[#EFF8E0] rounded-md p-2">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherInfo;
