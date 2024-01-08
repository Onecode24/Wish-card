import Editable from '@/components/editable'
import SimpleGeometry from '@/components/ui/simple-geometry'

export default function Home() {
  return (
    <main className='w-full h-[100dvh] flex justify-center items-center'>
      <section className='h-screen z-0 w-screen '>
        <SimpleGeometry className='rounded-full' width={150} height={150} color='#fff000' />
        <SimpleGeometry className='rounded-full text-white' width={150} height={50} color='#8214c1' />
      </section>
      
      <Editable value='LastName' className='mx-auto montserrat-medium text-4xl absolute'  />
      
    </main>
  )
}
