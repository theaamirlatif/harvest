interface PhotoProps {
  photosData: string[];
}
const Photos: React.FC<PhotoProps> = ({ photosData }) => {
  return (
    <div className="bg-wrapper mb-5">
      <h5 className="!text-lg md:!text-xl font-bold mb-5">Photos (1-10):</h5>
      <div className="flex gap-1.5 justify-center sm:justify-start flex-wrap">
        {photosData?.map((photo) => (
          <img
            src={photo}
            alt="photo"
            className="w-full max-w-[120px] h-[80px] rounded-[10px]"
          />
        ))}
      </div>
    </div>
  );
};

export default Photos;
