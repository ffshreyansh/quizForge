import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className=" min-h-screen bg-bl text-white">
        <nav className='flex items-center justify-between w-full p-8'>
          <span className='font-medium font-serif text-3xl'>QuizGen</span>
            <Link href={''} className='border  flex items-center justify-center w-48 h-12 rounded-full text-sm font-medium'>
              Star on Github
              </Link>
        </nav>
        <div className='container mx-auto h-full flex text-center flex-col items-start justify-around pt-24'>
            <p className='text-center text-5xl mx-auto italic font-serif'>unlock knowledge</p>
            <h1 className='text-6xl font-bold mx-auto gradient-text'>Embrace the Quest</h1>
            <p className='w-1/2 mx-auto text-lg text-gray-500 mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ea reprehenderit fuga voluptatibus, repellat vero ut expedita dignissimos aliquam sapiente?
            </p>
            <div className='flex items-center gap-4 mx-auto w-1/3 mt-10'>
              <input type="text" className='border-2 bg-transparent border-gray-700 outline-none w-2/3 px-4 h-12 rounded-full' placeholder='type topic name here...' name="" id="" />
                <Link href={'/'} className='gradient-bg text-white w-1/3 h-12 flex items-center justify-center rounded-full text-sm font-medium '>Generate</Link>
            </div>

        </div>
    </main>
  )
}
