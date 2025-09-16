interface ReviweCardProp {
  icon: string;
  name: string;
  time: string | number;
  ratingStars: string;
  rating: string;
  desc: string;
}

const ReviewCard: React.FC<ReviweCardProp> = ({
  icon,
  name,
  time,
  ratingStars,
  rating,
  desc,
}) => {
  return (
    <div className="bg-[#FAFAFA] rounded-lg p-5 text-xs md:text-sm font-normal">
      <div className="flex items-center gap-2 mb-3">
        <img
          src={icon}
          alt="profile"
          className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full"
        />
        <div className="flex flex-col gap-1">
          <strong className="text-sm md:text-base font-bold">{name}</strong>
          <span className="text-xs md:text-[13px] font-normal">{time}</span>
        </div>
      </div>
      <div className="flex gap-1 text-sm md:text-base font-normal mb-3">
        <img src={ratingStars} alt="stars" />
        <p>{rating}</p>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default ReviewCard;
