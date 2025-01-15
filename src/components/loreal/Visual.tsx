import { cn } from "@/lib/utils";
import { VignetteImageProps } from "../sections/SectionVignettes";
import { env } from "@/lib/env";

type VignetteVisualProps = {
  image?: VignetteImageProps;
  isHovered: boolean;
};

export default function Visual({ image, isHovered }: Readonly<VignetteVisualProps>) {
  if (!image) return null;
  return (
    <div>
      <div className="absolute inset-0">
        <div
          className={cn(
            "flex h-full w-full transform items-end object-cover transition-transform duration-300 ease-in-out",
            isHovered ? "scale-110" : "scale-100"
          )}>
          <div className={cn("absolute left-0 h-[55vmax] xs:h-[60vmax] lg:h-[23vmax] w-auto md:w-full", image.className)}>
            <img
              src={env.BASE_PATH + image.src}
              alt={image.alt}
              className="z-[-1] h-full w-full object-contain object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
