import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'
import CoffeeStoresData from '../../data/coffee-stores.json'

export function getStaticProps(staticProps) {
    const params = staticProps.params
    console.log("params", params)
    return {
        props: {
            CoffeeStore: CoffeeStoresData.find(CoffeeStore => {
                return CoffeeStore.id.toString( ) === params.id
            }),
        }
    }
}

export function getStaticPaths() {
    return {
        paths: [
            {params: {id: '0'}},{params: {id: '1'}},], 
            fallback: false,
    }
}

const CoffeeStore = (props) => {
    const router = useRouter()
    console.log("router", router)

    console.log("props", props)
    return (
        <div>
            <h1 className='text-4xl'>Coffee Store {router.query.id}</h1><br />
            <Link href='/'><a className='text-4xl underline'>Back to home</a></Link><br />
            <Link href='/coffee-store/dynamic'><a className='text-4xl underline'>go to page dynamic</a></Link>
            <p>{props.CoffeeStore.address}</p>
            <p>{props.CoffeeStore.name}</p>
        </div>
    )
}

export default CoffeeStore