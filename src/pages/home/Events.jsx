import React from 'react'

function Events() {
  const upcomingEvents = [
  {
    title: "Annual Football Championship",
    date: "15 August 2026",
    description: "Join us for the biggest football tournament of the year as top teams compete for the championship trophy. Experience thrilling matches, passionate fans, and unforgettable moments on the field."
  },
  {
    title: "Youth Football Development Camp",
    date: "5 September 2026",
    description: "A special training camp designed for young football enthusiasts to improve their skills, fitness, and tactical understanding under the guidance of professional coaches."
  },
  {
    title: "Charity Football Match",
    date: "20 October 2026",
    description: "Watch local football stars and community leaders come together for a friendly match aimed at raising funds for youth sports programs and community development initiatives."
  }
];
  return (
    <div className='py-16 bg-white  font-serif'>
      <div className='max-w-7xl md:w-[80%] mx-auto px-2'>
        <h1 className='text-center text-4xl md:text-6xl font-extrabold text-green-400'>Upcoming Events</h1>
        <table className='w-full mt-10'>
          <thead className='border'>
            <th className='border-r p-2'>Title</th>
            <th className='border-r p-2'>Description</th>
            <th>Date</th>
          </thead>
          <tbody className=''>
              {
                upcomingEvents.map((item) => (
                  <tr className='border'>
                  <td className='border-r p-2'>{item.title}</td>
                  <td className='border-r p-2'>{item.description}</td>
                  <td className='p-2'>{item.date}</td>
                </tr>
                ))
              }
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Events