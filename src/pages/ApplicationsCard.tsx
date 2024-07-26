import ArrowRight from "@/components/ArrowRight";
import { Button } from "@/components/ui/button";

interface IProps {
  title: string;
  description: string;
  img: string;
  className: string;
}

const customWords = (text: string) => {
  const truncatedText = text.length >= 100 ? `${text.slice(0, 84)}...` : text;
  return truncatedText
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const ApplicationsCard = ({
  title,
  description,
  img,
  className,
}: IProps) => {
  const formattedDescription = customWords(description);

  return (
    <div className={`${className} w-[379.69px] h-[525px] space-y-4`}>
      <img className="w-[379.69px] h-[343.75px]" src={img} alt="" />
      <h3 className="font-semibold text-xl uppercase">{title}</h3>
      <p className="font-normal text-lg font-roboto text-[#666666]">
        {formattedDescription}
      </p>
      <Button
        variant={"outline"}
        size={"lg"}
        className="flex gap-2 justify-center items-center w-fit px-0"
      >
        View More <ArrowRight color="black" />
      </Button>
    </div>
  );
};
