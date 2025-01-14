import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const images = [
    {
      src: '/assets/Hero1.jpeg',
      alt: 'Delicious layered dessert with whipped cream',
      title: 'Experience Culinary Excellence',
    },
    {
      src: '/assets/Hero2.jpeg',
      alt: 'Tiramisu dessert presentation',
      title: 'Experience Culinary Excellence',
    },
    {
      src: '/assets/Hero3.jpeg',
      alt: 'Artistic cake presentation from above',
      title: '40% off on all orders on Fridays',
    },
  ]
  return (
    <div className="relative w-full overflow-hidden pt-20">
      {' '}
      <div className="embla  " ref={emblaRef}>
        <div className="embla__container h-[85vh]   flex w-full">
          {images.map((image, index) => (
            <div key={index} className="  w-full h-full  flex-none relative">
              <img
                alt={image.alt}
                src={image.src}
                className="h-full object-fill w-full "
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-4xl md:text-6xl font-bold text-golden text-center px-4">
                  {image.title}
                </h1>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 right-4 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-2 bg-red-300 h-2 rounded-full transition-all `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
