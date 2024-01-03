import Editable from '@/components/editable'

export default function Home() {
  return (
    <main className='w-full h-[100dvh] flex justify-center items-center'>
      <Editable value='LastName' className='mx-auto outline-none'  />
    </main>
  )
}
