import useEmblaCarousel from 'embla-carousel-react'
import { motion } from 'framer-motion'
import { MessageSquare, Star } from 'lucide-react'
import React from 'react'

const reviewsVariant = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      type: 'spring',
    },
  },
}

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Food Blogger',
    rating: 5,
    text: "The best Mediterranean cuisine I've ever had! Highly recommend trying their signature lemon-infused drinks as well.",
    image: '/assets/people/R1.svg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Travel Enthusiast',
    rating: 5,
    text: 'A hidden gem! The homemade desserts are to die for. Will definitely be back! Don’t miss out on their freshly baked pita bread.',
    image: '/assets/people/R2.svg',
  },
  {
    id: 3,
    name: 'George Davis',
    position: 'Food Critic',
    rating: 4,
    text: 'Amazing atmosphere and even better food. The service was impeccable! The grilled lamb was tender and full of flavor.',
    image: '/assets/people/R3.svg',
  },
  {
    id: 4,
    name: 'Hailey Del',
    position: 'Chef',
    rating: 5,
    text: 'The best risotto I have ever had. The service was also really good,Don’t miss out on their freshly baked hummus.',
    image: '/assets/people/R4.svg',
  },
]

export const Reviews1 = () => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex flex-col justify-center items-center pt-8 md:pt-14 md:pb-20 max-w-xxl 2xl:max-w-xxxl mx-auto "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2, delay: 0.2 },
          },
        }}
      >
        <motion.h1
          className="font-alex text-golden text-5xl lg:text-7xl text-center pr-4 pb-2 lg:pb-4 -ml-1"
          variants={reviewsVariant}
        >
          Customer
        </motion.h1>
        <motion.h1
          className="pr-4 font-josefin text-4xl  md:text-5xl lg:text-6xl font-bold text-blackish md:w-[70%] text-center pb-6"
          variants={reviewsVariant}
        >
          Reviews
        </motion.h1>
        <motion.div
          className="space-y-4 mx-2 flex  gap-x-6 md:gap-x-4"
          variants={reviewsVariant}
        >
          {reviews.map((review) => (
            <div key={review.id} className="w-[75%] md:basis-1/2 lg:basis-1/3 ">
              <div className="bg-greener p-6 rounded-xl shadow-md h-full ">
                <div className="flex items-center mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full mr-4 bg-gray-400"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-100">
                      {review.name}
                    </h3>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="size-4 px-0.5 fill-[#E4B44E] text-[#E4B44E]"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-300">{review.text}</p>
                <MessageSquare className="w-6 h-6 text-purple-400 mt-4" />
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
      <img
        src="/assets/pepper.png"
        className="size-64 md:size-72 2xl:size-96 absolute -right-32 bottom-10 opacity-15"
      />
    </div>
  )
}

export const Reviews = () => {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        className="flex flex-col justify-center items-center pt-8 md:pt-14 md:pb-20 max-w-xxl 2xl:max-w-xxxl mx-auto  relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.2, delay: 0.2 },
          },
        }}
      >
        <div className="absolute left-0 top-0 z-10 h-full w-1 lg:w-6 bg-gradient-to-r from-white/40 to-transparent" />
        <div className="absolute right-0 top-0 z-10 h-full w-1 lg:w-6 bg-gradient-to-l from-white/40 to-transparent" />

        <motion.h1
          className="font-alex  text-golden text-5xl lg:text-7xl text-center pr-4 pb-2 lg:pb-4 -ml-1"
          variants={reviewsVariant}
        >
          Customer
        </motion.h1>
        <motion.h1
          className="pr-4 font-josefin text-4xl  md:text-5xl lg:text-6xl font-bold text-blackish md:w-[70%] text-center pb-6"
          variants={reviewsVariant}
        >
          Reviews
        </motion.h1>
        <Card />
      </motion.div>
      <img
        src="/assets/bg/Brock.png"
        className="size-64 md:size-72  2xl:size-96 absolute -left-24 xl:-left-32 top-[20%]  opacity-10 rotate-45"
      />
    </div>
  )
}

const Card = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()
  return (
    <div className="relative w-full overflow-hidden py-2">
      {' '}
      <div className="embla  " ref={emblaRef}>
        <div className="embla__container min-h-[30vh] h-auto pl-2 lg:pl-10   flex w-full gap-x-3 md:gap-x-5 ">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="relative w-[75%] md:basis-1/2 lg:basis-1/3 mx-1  flex-none  bg-greener p-6 rounded-xl shadow-md hover:scale-[1.015] ease-in-out transition-transform duration-200"
            >
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full mr-4 bg-gray-400"
                />
                <div>
                  <h3 className="font-semibold text-gray-100">{review.name}</h3>
                  <p className="text-sm text-gray-400">{review.position}</p>
                </div>
              </div>
              <p className="text-gray-300 lg:pr-2">{review.text}</p>
              <div className="flex    gap-x-1 lg:gap-x-1.5 pt-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 xl:size-5  fill-golden text-[#E4B44E]"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reviews
