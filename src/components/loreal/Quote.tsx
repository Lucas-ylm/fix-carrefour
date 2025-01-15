import React from "react";
import SlideIn from "../animation/SlideIn";
import ExportedPicture from "../templateComponent/ExportedPicture";
import { cn } from "@/lib/utils";

type QuoteProps = {
  className?: string;
  className2?: string;
  className3?: string;
  elementClassName?: string;
  children: React.ReactNode;
  direction?: "left" | "right";
  directionQuote?: "left" | "right";
  author?: string;
  about?: string;
  pictureSrc?: string;
};

export const Quote = ({
  className,
  className2,
  className3,
  children,
  elementClassName,
  direction = "left",
  directionQuote = "left",
  author,
  about,
  pictureSrc,
}: QuoteProps) => {
  if (!children) return null;

  const directionClass = direction === "left" ? "before:left-0 pl-0" : "before:right-[20px] pr-[20px]";

  return (
    <SlideIn elementClassName={elementClassName} direction={directionQuote}>
      <div
        className={`before:h-[70px] w-[309px] lg:w-[unset] relative pt-0 text-black before:absolute before:bottom-[0px] before:top-0 before:z-[-2] before:w-[0.5px] before:bg-black before:content-[''] ${directionClass} ${className}`}>
            <div className="grid px-10">
              {pictureSrc && (
                <ExportedPicture
                  className={cn(
                    `grid-row-1 w-[175px] h-auto !object-contain ${className2}`,
                    direction === "left" ? "ml-[-18px] col-start-1 lg:ml-[-18px]" : "col-start-1 lg:ml-[50px]"
                  )}
                  alt="Pauline Ngomé"
                  src={pictureSrc}
                  priority={true}
                />
              )}
            </div>
          <div
            className={`relative ${direction === "left" ? "left-[-25px] lg:right-[-50px]" : "right-[-25px] lg:right-[-50px]"} lg:${direction}-[-50px] mb-5 flex h-fit bg-white px-0 font-bitter text-black`}>
            <div className={`${direction === "left" ? "<text-left>" : "text-right"} w-full`}>
              <p className={`text-[18px] text-balance italic font-light leading-[30px] lg:text-[20px] pt-[10px] ${className3}`}>{children}</p>
            </div>
          </div>
          <div className={`px-10 border-black border-solid font-roboto ${direction === "left" ? "text-left border-l-[1px]" : "text-right border-r-[1px]"}`}>
            {author && <p className="font-bold text-[20px]">{author}</p>}
            {about && (
              <p
                className="text-[16px] text-balance leading-[22px]"
                dangerouslySetInnerHTML={{ __html: about }}
              ></p>
            )}
          </div>
      </div>
    </SlideIn>
  );
};
