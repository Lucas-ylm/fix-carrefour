import HeroArticle from "../loreal/HeroArticle";

type SectionArticleHeroProps = {
  subTitle: string;
  mainTitle: React.ReactNode;
  mainSubTitle?: string;
  plane1: string;
  plane2: string;
  plane3: string;
  plane1ClassName: string;
  plane2ClassName: string;
  plane3ClassName: string;
  backgroundClass: string;
};

export default function SectionArticleHero({
  subTitle,
  mainTitle,
  mainSubTitle,
  plane1,
  plane2,
  plane3,
  backgroundClass,
}: Readonly<Omit<SectionArticleHeroProps, 'plane1ClassName' | 'plane2ClassName' | 'plane3ClassName'>>) {
  return (
    <div className="relative grid h-screen w-screen overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="relative h-full w-full">
          <div className={`${backgroundClass} absolute left-0 top-0 h-full w-full`} />
          <HeroArticle plane1={plane1} plane2={plane2} plane3={plane3} />
        </div>
      </div>

      <div className="pointer-events-none relative flex h-full w-full flex-col items-start space-y-10 px-[20px] pt-[100px] pb-10 text-black lg:justify-center lg:px-[40px]">
        <p className="pt-[10px] font-roboto text-[14px] font-normal uppercase leading-normal lg:text-[16px] lg:leading-8">
          {subTitle}
        </p>
        <h1 className="font-bitter !mt-[10px] text-[25px] font-light leading-[130%] lg:text-[60px] lg:tracking-[-1px]">
          {mainTitle}
        </h1>
        <p className="hidden !mt-[10px] font-roboto text-[20px] font-bold lg:inline lg:tracking-[0.1px]">
          {mainSubTitle}
        </p>
      </div>
    </div>
  );
}


