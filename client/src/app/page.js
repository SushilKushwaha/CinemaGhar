"use client"
import Nav from '@/components/navBar/page'
import Footer from '@/components/footer/page'




export default function Home() {
  return (
    <div>
      <Nav />
      <section>
        <div className='h-64 w-64 inline-flex gap-10 '>
          <img src='m-1.png'  />
          <img src='m-2.png'  />
          <img src='m-3.png'  />
        </div>

      </section> 
      <Footer />
    </div>
  )
};
