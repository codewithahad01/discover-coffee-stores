import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Banner from '../components/Banner'
import Card from '../components/Card'
import coffeeStores from '../data/coffee-stores.json'


export default function Home() {

  const handleOnBannerBtnClick = () => {
    console.log('Heyy')
  }

  return (
    <div>
      <Head>
        <title>Coffee Connoisseur</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative overflow-hidden pb-32">  
          <Image className='' src='/static/hero-image.png'
              alt="hero img"
              width={1440}
              height={400}
              />
          
          <div className="absolute top-0 left-0 px-6 py-4 ">
            <Banner className="absolute bottom-0 inset-x-0" buttonText="View stores nearby" handleOnClick={handleOnBannerBtnClick} />
          </div>
      </main>
      <div className='flex justify-center md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'> 

          {coffeeStores.map(coffeeStores => {
            return ( 
              <Card key={coffeeStores.id}
              name={coffeeStores.name}
              imgUrl={coffeeStores.imgUrl} 
              href={`/coffee-store/${coffeeStores.id}`}
              />
            )
          } )}
      </div>
      
    </div>
  )
}
