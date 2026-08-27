"use client";

import Image from "next/image";
import {
  useEffect,
  useMemo,
  useState,
  type CSSProperties,
  type TransitionEvent,
} from "react";

const brands = [
  { src: "/car-logos/mercedes-mark.svg", alt: "Mercedes-Benz" },
  { src: "/car-logos/bmw.svg", alt: "BMW" },
  { src: "/car-logos/audi.svg", alt: "Audi" },
  { src: "/car-logos/volkswagen.svg", alt: "Volkswagen" },
  { src: "/car-logos/hyundai.svg", alt: "Hyundai" },
  { src: "/car-logos/toyota.svg", alt: "Toyota" },
  { src: "/car-logos/skoda.svg", alt: "Škoda" },
  { src: "/car-logos/ford.svg", alt: "Ford" },
  { src: "/car-logos/renault.svg", alt: "Renault" },
  { src: "/car-logos/peugeot.svg", alt: "Peugeot" },
] as const;

function getVisibleCount() {
  if (typeof window === "undefined") return 5;
  if (window.innerWidth <= 480) return 2;
  if (window.innerWidth <= 768) return 3;
  if (window.innerWidth <= 1100) return 4;
  return 5;
}

export function CarLogoCarousel() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [trackIndex, setTrackIndex] = useState(5);
  const [animated, setAnimated] = useState(true);

  const carouselBrands = useMemo(
    () => [
      ...brands.slice(-visibleCount),
      ...brands,
      ...brands.slice(0, visibleCount),
    ],
    [visibleCount],
  );

  useEffect(() => {
    const updateVisibleCount = () => setVisibleCount(getVisibleCount());

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  useEffect(() => {
    const resetTimer = window.setTimeout(() => {
      setAnimated(false);
      setTrackIndex(visibleCount);
      window.requestAnimationFrame(() => setAnimated(true));
    }, 0);

    return () => window.clearTimeout(resetTimer);
  }, [visibleCount]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setAnimated(true);
      setTrackIndex((current) => current + 1);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  function handleTransitionEnd(event: TransitionEvent<HTMLDivElement>) {
    if (event.propertyName !== "transform") return;

    if (trackIndex >= brands.length + visibleCount) {
      setAnimated(false);
      setTrackIndex(visibleCount);
    }
  }

  const trackStyle = {
    "--visible-brands": visibleCount,
    transform: `translate3d(-${(trackIndex * 100) / visibleCount}%, 0, 0)`,
  } as CSSProperties;

  return (
    <div
      className="car-logo-rail"
      aria-roledescription="carousel"
      aria-label="Marke vozila za ugradnju auto-kuka"
    >
      <div
        className={`car-logo-track${animated ? " car-logo-track-animated" : ""}`}
        style={trackStyle}
        onTransitionEnd={handleTransitionEnd}
      >
        {carouselBrands.map((brand, index) => (
          <div
            className="car-logo"
            aria-hidden={index < visibleCount || index >= visibleCount + brands.length}
            key={`${brand.src}-${index}`}
          >
            <Image src={brand.src} alt={brand.alt} width={110} height={52} />
          </div>
        ))}
      </div>
    </div>
  );
}
