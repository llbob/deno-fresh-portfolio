import { useSignal } from "@preact/signals";
import { useEffect, useRef } from "preact/hooks";
import { Project } from "../routes/data/projects.ts";

interface ProjectCarouselProps {
  project: Project;
  showNavigation?: boolean;
}

export default function ProjectCarousel({ project, showNavigation = true }: ProjectCarouselProps) {
  const currentImageIndex = useSignal(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    currentImageIndex.value = (currentImageIndex.value + 1) % project.imageUrls.length;
  };

  const previousSlide = () => {
    currentImageIndex.value = (currentImageIndex.value - 1 + project.imageUrls.length) % project.imageUrls.length;
  };

  useEffect(() => {
    const keydownHandler = (event: KeyboardEvent) => {
      if (event.code === "ArrowLeft") {
        event.preventDefault();
        previousSlide();
      } else if (event.code === "ArrowRight") {
        event.preventDefault();
        nextSlide();
      }
    };

    carouselRef.current?.addEventListener("keydown", keydownHandler);
    return () => carouselRef.current?.removeEventListener("keydown", keydownHandler);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg mb-4" ref={carouselRef} tabIndex={0}>
      <img
        src={project.imageUrls[currentImageIndex.value]}
        alt={`${project.title} image ${currentImageIndex.value + 1}`}
        className="w-full h-auto object-cover transition-opacity duration-300"
      />
      {showNavigation && (
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            className="p-2 rounded-full bg-black bg-opacity-30 text-white hover:bg-opacity-50 focus:bg-opacity-50 focus:outline-none transition-colors duration-300"
            onClick={previousSlide}
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="p-2 rounded-full bg-black bg-opacity-30 text-white hover:bg-opacity-50 focus:bg-opacity-50 focus:outline-none transition-colors duration-300"
            onClick={nextSlide}
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {project.imageUrls.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 mx-1 rounded-full transition-colors duration-300 ${
              index === currentImageIndex.value ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            onClick={() => {
              currentImageIndex.value = index;
            }}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
