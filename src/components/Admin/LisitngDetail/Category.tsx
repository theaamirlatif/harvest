import Checkbox from "../Checkbox";

const Category = () => {
  return (
    <div className="bg-wrapper h-full">
      <div className="flex justify-between flex-wrap items-center gap-2 mb-3">
        <h3 className="!text-lg md:!text-xl font-bold">
          Compliance (category-aware):
        </h3>
        <div className="text-sm font-normal flex items-center gap-2">
          <p>Category</p>
          <span className="bg-[#EFF8E0] rounded-6 p-1">Firearms</span>
        </div>
      </div>
      <div className="bg-[#F3F8FB] rounded-lg p-4 text-sm font-normal mb-3">
        <p>
          I acknowledge that all firearm sales must comply with federal, state,
          and local laws. I understand that certain transactions require
          transfer through a licensed FFL.
        </p>
      </div>
      <Checkbox id="category" label="This item requires an FFL transfer" />
    </div>
  );
};

export default Category;
