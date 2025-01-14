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
              <div className="absolute inset-0 bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-y-6">
                <h1 className="text-4xl  md:w-[60%] md:text-6xl font-bold text-golden text-center px-4">
                  {image.title}
                </h1>
                <div className="flex gap-2 mx-5">
                  <button className=" py-2  px-4 text-base md:text-lg bg-greener border-white rounded-lg  hover:bg-transparent hover:backdrop-blur-sm text-white">
                    <NavLink to="/reservation">Book a table</NavLink>
                  </button>
                  <button className="py-2  px-4 text-base md:text-lg btn-ghost border-white rounded-lg hover:bg-greener hover:border-white text-white backdrop-blur-sm">
                    <NavLink to="/cart">Order Online</NavLink>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 2xl:bottom-6 right-4 md:right-6 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`size-3   rounded-full transition-all ${currentIndex == index ? 'bg-white' : 'bg-gray-500'} `}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
