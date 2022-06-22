import Document, {  Html, Head, Main, NextScript } from "next/document";
import Link from 'next/link'


class MyDocument extends Document {
    render() {
        return (
            <Html leng="en">
                <Head>
                    <link
                        rel="preload"
                        href="/fonts/IBMPlexSans-Bold.ttf"
                        as="font"
                        crossOrigin="ananymous"
                    ></link>

                    <link
                        rel="preload"
                        href="/fonts/IBMPlexSans-Medium.ttf"
                        as="font"
                        crossOrigin="ananymous"
                    ></link>

                    <link
                        rel="preload"
                        href="/fonts/IBMPlexSans-Regular.ttf"
                        as="font"
                        crossOrigin="ananymous"
                    ></link>

                    <link
                        rel="preload"
                        href="/fonts/IBMPlexSans-SemiBold.ttf"
                        as="font"
                        crossOrigin="ananymous"
                    ></link>
                </Head>
                <body>
                    <Main></Main>
                    <NextScript />
                </body>

                
            </Html>
        )
    }
}

export default MyDocument