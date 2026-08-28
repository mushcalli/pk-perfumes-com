import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import type { EmblaCarouselType } from "embla-carousel";
import MSymbol from "./materialsymbol";

export default function EmblaCarousel({ images }: { images: string[] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
    const [selectedSnap, setSelectedSnap] = useState<number>(0);

    const scrollTo = (i: number) => emblaApi?.scrollTo(i);
    const setupSnaps = (emblaApi: EmblaCarouselType) => setScrollSnaps(emblaApi.scrollSnapList());
    const setActiveSnap = (emblaApi: EmblaCarouselType) => setSelectedSnap(emblaApi.selectedScrollSnap());

    useEffect(() => {
        if (!emblaApi) return;

        setupSnaps(emblaApi);
        setActiveSnap(emblaApi);
        emblaApi.on('reInit', setupSnaps);
        emblaApi.on('reInit', setActiveSnap)
        emblaApi.on('select', setActiveSnap)
    }, [emblaApi]);

    return (
    <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
                {images.map((source, i) => 
                    <img className="embla__slide" key={i} src={source}></img>
                )}
            </div>
        </div>
        
        <div className="flex flex-row place-content-between">
            <button className="embla__prev cursor-pointer" onClick={() => emblaApi?.scrollPrev()}>
                <MSymbol type="chevron_left" color="white" opsz={40}></MSymbol>
                <p className="visually-hidden">slideshow previous</p>
            </button>
            <div className="embla__dots mb-2 flex gap-1 sm:gap-2">
                {scrollSnaps.map((_, index) => (
                    <button className={"cursor-pointer " + 'embla__dot'.concat(
                        index === selectedSnap ? ' embla__dot--selected' : ''
                    )} key={index} onClick={() => scrollTo(index)}>
                        <MSymbol type="circle" fill={index === selectedSnap} color="white" opsz={10}></MSymbol>
                    </button>
                ))}
            </div>
            <button className="embla__next cursor-pointer" onClick={() => emblaApi?.scrollNext()}>
                <MSymbol type="chevron_right" color="white" opsz={40}></MSymbol>
                <p className="visually-hidden">slideshow next</p>
            </button>
        </div>
    </div>
  );
}