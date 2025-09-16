import { RiAttachment2 } from "react-icons/ri";
import Select from "../Select";
import InputField from "../InputField";
import TextareaField from "../TextAreaField";
import CommonButton from "@components/Buttons/CommonButton";

const AddNewTicket:React.FC = () => {
  const categoryOptions = [{ label: "Category", value: "Category" }];
  const options = [{ label: "High", value: "High" }];
  return (
    <div>
      <div className="flex flex-col md:flex-row md:gap-2 items-center">
        <Select
          label={"Category"}
          defaultOpt={"Select a Category"}
          options={categoryOptions}
        />
        <InputField
          id="subject"
          label="Subject"
          placeholder="Main reason for this ticket"
        />
      </div>
      <TextareaField
        id="desc"
        label="Description"
        placeholder="Provide detailed information about your issue "
      />
      <Select label={"Choose priority"} defaultOpt={"High"} options={options} />
      <div className="mb-3 flex flex-col">
        <label
          htmlFor="file"
          className="text-sm font-medium text-[#414651] mb-1"
        >
          Attachment (optional)
        </label>
        <div className="flex items-center gap-2 mb-3">
          <label
            htmlFor="fileUpload"
            className="px-4 py-2 border border-[#DEDEDE] rounded-[10px] cursor-pointer flex items-center gap-2 text-[#494949] text-sm font-normal"
          >
            Choose File <RiAttachment2 size={16} color="#717680" />
          </label>
          <span className="text-sm text-gray-500" id="file-chosen">
            No file chosen
          </span>
          <input
            type="file"
            id="fileUpload"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              const fileName = file ? file.name : "No file chosen";

              const chosenEl = document.getElementById("file-chosen");
              if (chosenEl) {
                chosenEl.textContent = fileName;
              }
            }}
          />
        </div>
      </div>

      <div className="flex gap-2 md:flex-nowrap flex-wrap">
        <CommonButton
          label="Cancel"
          buttonContainerStyle="bg-white border border-[#25252533] h-[48px]"
        />
        <CommonButton
          label="Submit Ticket Now"
          buttonContainerStyle="bg-[#FDC700] h-[48px]"
        />
      </div>
    </div>
  );
};

export default AddNewTicket;
