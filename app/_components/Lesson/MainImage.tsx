interface MainImageProps {
  main: string;
  main_bg: string;
  title:string;
}

export default function MainImage({ main, main_bg, title }: MainImageProps) {
  return (
    <div className="relative text-center mt-[50px] ml-[50px] mr-[50px]">
      <img src={main} alt="" className="relative z-0" />
      <img src={main_bg} alt="" className="absolute top-0 z-0" />

      <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-end">
        <h1 className="text-[#FFFFFF] text-[48px] mb-[40px] font-bold">{title}</h1>
      </div>

    </div>
  );
}