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
    rating: 5,
    text: "The best Mediterranean cuisine I've ever had! The lemon chicken was perfectly seasoned.",
    image: '/assets/people/R1.svg',
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    text: 'Amazing atmosphere and even better food. The service was impeccable!',
    image: '/assets/people/R2.svg',
  },
  {
    id: 3,
    name: 'Emma Davis',
    rating: 4,
    text: 'A hidden gem! The homemade desserts are to die for. Will definitely be back!',
    image: '/assets/people/R3.svg',
  },
]

export const Reviews = () => {
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
          className="space-y-4 mx-2 flex"
          style={{
            overflowX: 'scroll',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
          variants={reviewsVariant}
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="basis-1/2 md:basis-1/2 lg:basis-1/3 "
            >
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
