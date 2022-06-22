import React from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

function CoffeeStore() {
  const router = useRouter()
  console.log('router', router)
  return (
    <div>
      CoffeeStore{router.query.id}
      <Link href='/' ><a>Back to home</a></Link>
      <Link href='/coffee-store/dynamic' ><a>Go to dynamic page</a></Link>
    </div>
  )
}

export default CoffeeStore 