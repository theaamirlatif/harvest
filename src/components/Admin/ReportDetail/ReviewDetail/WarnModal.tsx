import TextareaField from "@components/Admin/TextAreaField";
import CommonButton from "@components/Buttons/CommonButton";
interface closeProp {
  onClose: () => void;
}
const WarnModal: React.FC<closeProp> = ({ onClose }) => {
  return (
    <div>
      <TextareaField
        id="message"
        label="Describe your message"
        placeholder="Write the reason for your action..."
      />
      <div className="flex sm:flex-nowrap flex-wrap gap-2">
        <CommonButton
          onClick={onClose}
          label="Cancel"
          buttonContainerStyle="h-[48px] bg-white border border-[#25252533] rounded-[50px]"
        />
        <CommonButton
          onClick={onClose}
          label="Send & Warn Reviewer"
          buttonContainerStyle="h-[48px] bg-[#FCF055] rounded-[50px]"
        />
      </div>
    </div>
  );
};

export default WarnModal;
