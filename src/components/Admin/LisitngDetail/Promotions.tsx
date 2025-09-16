
const Promotions = () => {
  return (
    <div className="bg-wrapper h-full">
      <h3 className="!text-xl font-bold">Promotions & Billing</h3>
      <div className="text-sm font-normal flex flex-col items-start gap-1">
        <p>Bump:</p>
        <span className="bg-[#EFF8E0] rounded-6 p-1">Last bump</span>
        <strong className="font-semibold">$0.20 (Paid)</strong>
        <span className="bg-[#EFF8E0] rounded-6 p-1">Free bumps left:</span>
        <p>0 (Pro gives 1 per post; used)</p>
      </div>
    </div>
  );
};

export default Promotions;
