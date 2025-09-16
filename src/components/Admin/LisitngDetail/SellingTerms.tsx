
const SellingTerms = () => {
  const data = [
    {
      label: "Payment",
      value: "PayPal F&F, Zelle, Cash",
    },
    {
      label: "Shipping",
      value: "Buyer pays (UPS Ground",
    },
    {
      label: "Meetup Area",
      value: "North Austin / Domain",
    },
    {
      label: "Open To Trade",
      value: "Yes trade UPS",
    },
  ];
  return (
    <div className="bg-wrapper mb-5">
      <h3 className="!text-lg md:!text-xl font-bold mb-3">Selling Terms</h3>
      <div className="flex gap-2 flex-wrap md:gap-5">
        {data?.map((item, i) => (
          <div key={i} className="text-base font-normal flex flex-col gap-1">
            <p>{item.label}:</p>
            <span className="text-sm bg-[#EFF8E0] rounded-6 p-2">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellingTerms;
