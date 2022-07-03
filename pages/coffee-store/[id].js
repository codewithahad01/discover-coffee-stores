import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import CoffeeStoresData from '../../data/coffee-stores.json'
import Head from 'next/head'
import Image from 'next/image'
import cls from 'classnames'

export function getStaticProps(staticProps) {
    const params = staticProps.params
    return {
        props: {
            CoffeeStore: CoffeeStoresData.find(CoffeeStore => {
                return CoffeeStore.id.toString( ) === params.id
            }),
        }
    }
}

export function getStaticPaths() {
    const paths = CoffeeStoresData.map(coffeeStore => {
        return {
            params: {
                id: coffeeStore.id.toString(),
            }
        }
    })
    return {
        paths: paths, 
        fallback: true,
    }
}

const CoffeeStore = (props) => {
    const router = useRouter()

    if(router.isFallback) {
        return <div className='text-xl md:text-2xl'> Loading... </div>
    }

    const {address, name, neighbourhood, imgUrl} = props.CoffeeStore

    const handleUpvoteButton = () => {
        console.log('heyyy iam up voted')
    }
    
    return (
        <div className=''>
            <Head>
                <title>{name}</title> 
            </Head>
            <div className='container'>
                <div>
                    <div>
                        <Link href='/'><a className='text-xl underline'>Back to home</a></Link>
                    </div>
                    <h1>{name}</h1>
                    <Image
                        src={imgUrl} 
                        alt={name} 
                        width={600} 
                        height={360}
                    ></Image>
                </div>

                <div className={cls('glass', '')}>
                <div>
                    <Image src='' alt={name} width={24} height={24} ></Image>
                    <p>{address}</p>
                </div>
                    
                <div>
                    <Image src='' alt={name} width={24} height={24} ></Image>
                    <p>{neighbourhood}</p>
                </div>

                <div>
                    <Image src='' alt={name} width={24} height={24} ></Image>
                    <p>1</p>
                </div>

                <button type='button' className='bg-violet-800 text-white font-bold px-10 py-7' onClick={handleUpvoteButton }>Up votes!</button>

                </div>
            </div>
        </div>
    )
}

export default CoffeeStore