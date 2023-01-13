import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link rel="icon" href="/assets/img/favicon.ico" />

          {/*Bootstrap core CSS*/}
          <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />

          {/*Fonts*/}
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet" />

          {/*Custom styles for this template*/}
          <link href="/assets/css/mediumish.css?v=12345678910123456" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
