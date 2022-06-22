import {useRouter} from 'next/router'
import Head from 'next/head'

const DynmaicRounte = () => {
  const router = useRouter()
  const query = router.query.dynamic
  console.log('query', query )
  return (
    <div>
    <Head>
      <title>
        {query}
      </title>
    </Head>
      hey, There iam ahad youre friend: {query}
    </div>
  )
}

export default DynmaicRounte