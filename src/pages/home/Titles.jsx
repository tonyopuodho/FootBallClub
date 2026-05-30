import React from 'react'

function Titles() {
    const titles = [
  {
    title: "National Champions Cup 2025",
    image:"src/assets/trophy1.jpeg",
    description: "Our team secured the National Champions Cup after an outstanding season, demonstrating exceptional teamwork, discipline, and tactical excellence throughout the competition."
  },
  {
    title: "Regional Premier League Title",
    image:"src/assets/images (1).jpeg",
    description: "We emerged as league champions by maintaining consistent performances, finishing at the top of the table and showcasing our commitment to excellence."
  },
  {
    title: "Youth Development Tournament",
    image:"src/assets/images.jpeg",
    description: "Our academy players triumphed in this prestigious youth competition, highlighting the success of our player development and training programs."
  },
]
  return (
    <div className='bg-gray-100 py-16 h-[100vh]'>
        <div className='max-w-7xl md:w-[80%] mx-auto px-2 font-serif'>
            <h1 className='text-4xl md:text-6xl font-extrabold text-green-400 text-center'>Won titles</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-10'>
                {
                    titles.map((item) => (
                        <div className='p-2 rounded-md shadow-md bg-white'>
                            <div className=''>
                              <img src={item.image} className='w-full h-full object-cover' alt="" />
                            </div>
                            <h1 className='text-xl text-green-400 font-extrabold'>{item.title}</h1>
                            <p className='text-gray-600'>{item.description}</p>
                        </div>
                    ))
                }
            </div>
            <div className='w-full flex justify-center items-center mt-4'>
              <button className='mt-2 py-2 w-[30%] font-extrabold bg-green-400 rounded-md text-xl cursor-pointer'>View more</button>
            </div>
        </div>
    </div>
  )
}

export default Titles