import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="preload"
      href="/fonts/SplineSans-Bold.ttf"
      as="font"
      crossOrigin='anonymous' />
      <link rel="preload"
      href="/fonts/SplineSans-SemiBold.ttf"
      as="font"
      crossOrigin='anonymous' />
      <link rel="preload"
      href="/fonts/SplineSans-Medium.ttf"
      as="font"
      crossOrigin='anonymous' />
      <link rel="preload"
      href="/fonts/SplineSans-Regular.ttf"
      as="font"
      crossOrigin='anonymous' />
      <link rel="preload"
      href="/fonts/SplineSans-Light.ttf"
      as="font"
      crossOrigin='anonymous' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
