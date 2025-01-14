import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { NavLink } from 'react-router-dom'

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const images = [
    {
      src: '/assets/Hero1.jpeg',
      alt: 'Delicious layered dessert with whipped cream',
      title: 'A Taste of Home in Every Dish',
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
    <div className="relative w-full overflow-hidden ">
      {' '}
      <div className="embla  " ref={emblaRef}>
        <div className="embla__container h-[85vh] md:h-[95vh]   flex w-full">
          {images.map((image, index) => (
            <div key={index} className="  w-full h-full  flex-none relative">
              <img
                alt={image.alt}
                src={image.src}
                className="h-full object-cover w-full "
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-y-6">
                <h1 className="text-4xl font-serif  md:w-[60%] xl:w-[45%] 2xl:w-[40%] md:text-6xl 2xl:text-7xl  font-medium text-white text-center px-4">
                  {image.title}
                </h1>
                <div className="flex gap-2 mx-5">
                  <button className=" py-2  px-4 text-sm md:text-base bg-golden border-white rounded-sm  hover:bg-[#E4B44E] shadow-md text-white hover:scale-[.98]">
                    <NavLink to="/reservation">Book a Table</NavLink>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 2xl:bottom-6 right-[45%]  md:right-6 2xl:right-14 flex gap-2 2xl:gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`size-3 2xl:size-3.5 border-white   rounded-full transition-all ${currentIndex == index ? 'bg-white' : 'bg-white/90 '} `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
