import Editable from '@/components/editable'
import SimpleGeometry from '@/components/ui/simple-geometry'

export default function Home() {
  return (
    <main className='w-full h-[100dvh] flex justify-center items-center'>
      <Editable value='LastName' className='mx-auto montserrat-medium text-4xl'  />
      <SimpleGeometry color='#000000' />
    </main>
  )
}
