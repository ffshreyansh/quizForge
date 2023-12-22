import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>

      <div className=" min-h-screen bg-bl text-white">
        {/* <div className='bg-grid'></div> */}

        {/* <section className='absolute z-10 w-full'> */}
          <nav className='flex items-center justify-between w-full p-4'>
            <span className='font-medium font-serif text-3xl'>QuizForge</span>
            <Link href={''} className='border  flex items-center justify-center w-28 lg:w-48 h-8 lg:h-12 rounded-full text-xs lg:text-sm font-medium'>
              Star on Github
            </Link>
          </nav>
          <div className='container mx-auto h-full flex text-center flex-col items-start justify-around pt-24'>
            <p className='text-center text-2xl lg:text-5xl mx-auto italic font-serif'>unlock knowledge</p>
            <h1 className='text-5xl lg:text-8xl font-bold mx-auto gradient-text'>Embrace the Quest</h1>
            <p className='w-full lg:w-1/2 mx-auto text-md lg:text-lg text-gray-500 mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ea reprehenderit fuga voluptatibus, repellat vero ut expedita dignissimos aliquam sapiente?
            </p>
            <div className='flex flex-col lg:flex-row items-center gap-4 mx-auto w-full lg:w-1/3 mt-10 px-4 lg:px-0'>
              <input type="text" className='border-2 bg-transparent border-gray-700 outline-none w-full lg:w-2/3 px-4 h-12 rounded-full' placeholder='Type topic name here...' name="" id="" />
              <Link href={'/'} className='gradient-bg text-white w-full lg:w-1/3 h-12 flex items-center justify-center rounded-full text-sm font-medium '>Generate</Link>
            </div>
          </div>
      <div className='flex flex-col items-start gap-3 px-2 lg:px-10 mt-20'>
          <span className='italic font-serif text-lg lg:text-2xl mx-auto lg:mx-0'>What QuizForge Offers!</span>
          <div className='flex flex-col lg:flex-row items-start justify-between w-full gap-8 mt-4'>
              <div className='border border-gray-500 w-full lg:w-1/3 h-fit rounded-xl p-7'>
                  <h4 className='text-xl font-semibold'>Mind Bender Challenge</h4>
                  <p className='mt-2 text-sm lg:text-md font-thin text-gray-500'>Lorem ipsum dolor sit, harum nisi quia iste, adipisci debitis, veritatis placeat hic tempora dolores fugiat vel odio eum. Quae neque dignissimos quibusdam esse fugiat sint porro vero et. Dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempore molestias quisquam labore? Odio consequatur sint ea nemo optio. Asperiores.</p>
                  <Link href={'/'} className='rounded-full border flex items-center justify-center border-gray-500 w-full lg:w-1/3 h-12 hover:bg-white hover:text-black transition-all mt-10'>Explore</Link>
              </div>
              <div className='border border-gray-500 w-full lg:w-1/3 h-fit rounded-xl p-7'>
                  <h4 className='text-xl font-semibold'>Mind Bender Challenge</h4>
                  <p className='mt-2 text-sm lg:text-md font-thin text-gray-500'>Lorem ipsum dolor sit, harum nisi quia iste, adipisci debitis, veritatis placeat hic tempora dolores fugiat vel odio eum. Quae neque dignissimos quibusdam esse fugiat sint porro vero et. Dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempore molestias quisquam labore? Odio consequatur sint ea nemo optio. Asperiores.</p>
                  <Link href={'/'} className='rounded-full border flex items-center justify-center border-gray-500 w-full lg:w-1/3 h-12 hover:bg-white hover:text-black transition-all mt-10'>Explore</Link>
              </div>
              <div className='border border-gray-500 w-full lg:w-1/3 h-fit rounded-xl p-7'>
                  <h4 className='text-xl font-semibold'>Mind Bender Challenge</h4>
                  <p className='mt-2 text-sm lg:text-md font-thin text-gray-500'>Lorem ipsum dolor sit, harum nisi quia iste, adipisci debitis, veritatis placeat hic tempora dolores fugiat vel odio eum. Quae neque dignissimos quibusdam esse fugiat sint porro vero et. Dolorum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex tempore molestias quisquam labore? Odio consequatur sint ea nemo optio. Asperiores.</p>
                  <Link href={'/'} className='rounded-full border flex items-center justify-center border-gray-500 w-full lg:w-1/3 h-12 hover:bg-white hover:text-black transition-all mt-10'>Explore</Link>
              </div>
             

          </div>
      </div>
        {/* </section> */}

      </div>
    </>
  )
}
