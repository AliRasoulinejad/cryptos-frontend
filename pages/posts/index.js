import Head from 'next/head'
import Script from 'next/script'

// import { Inter } from '@next/font/google'
//
// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
          {/*<Head>*/}
          {/*    // Global site tag (gtag.js) - Google Analytics*/}
          {/*    <script async src="https://www.googletagmanager.com/gtag/js?id={{ GOOGLE_ANALYTICS }}"></script>*/}
          {/*    // End Google Analytics*/}

          {/*    // Google Tag Manager*/}
          {/*    /!*<script>(function (w, d, s, l, i) {*!/*/}
          {/*    /!*    w[l] = w[l] || [];*!/*/}
          {/*    /!*    w[l].push({*!/*/}
          {/*    /!*        'gtm.start':*!/*/}
          {/*    /!*        new Date().getTime(), event: 'gtm.js'*!/*/}
          {/*    /!*    });*!/*/}
          {/*    /!*    var f = d.getElementsByTagName(s)[0],*!/*/}
          {/*    /!*    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';*!/*/}
          {/*    /!*    j.async = true;*!/*/}
          {/*    /!*    j.src =*!/*/}
          {/*    /!*    'https://www.googletagmanager.com/gtm.js?id=' + i + dl;*!/*/}
          {/*    /!*    f.parentNode.insertBefore(j, f);*!/*/}
          {/*    /!*})(window, document, 'script', 'dataLayer', '{{ GOOGLE_TAG_MANAGER_KEY }}');</script>*!/*/}
          {/*    <!-- End Google Tag Manager -->*/}

          {/*    <!-- Global site tag (gtag.js) - Google Analytics -->*/}
          {/*    <Script src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" strategy="afterInteractive" />*/}
          {/*    <Script id="google-analytics" strategy="afterInteractive">*/}
          {/*        {`*/}
          {/*            window.dataLayer = window.dataLayer || [];*/}
          {/*            function gtag(){window.dataLayer.push(arguments);}*/}
          {/*            gtag('js', new Date());*/}
          {/*            gtag('config', 'GA_MEASUREMENT_ID');*/}
          {/*        `}*/}
          {/*    </Script>*/}



          {/*    <meta charset="utf-8">*/}
          {/*    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">*/}
          {/*    <meta name="description" content="">*/}
          {/*    <meta name="author" content="">*/}
          {/*    <link rel="icon" href="{% static 'assets/img/favicon.ico' %}" />*/}
          {/*    <title>Cryptos</title>*/}
          {/*    <!-- Bootstrap core CSS -->*/}
          {/*    <link href="{% static '/assets/css/bootstrap.min.css' %}" rel="stylesheet">*/}
          {/*    <!-- Fonts -->*/}
          {/*    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">*/}
          {/*    <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet">*/}
          {/*    <!-- Custom styles for this template -->*/}
          {/*    /!*<link href="{% static 'assets/css/mediumish.css' %}{{ anti_cache }}" rel="stylesheet">*!/*/}
          {/*</Head>*/}

          <main>
              <h1>this is posts</h1>
              <h2>this is posts</h2>
              <h3>this is posts</h3>
              <h4>this is posts</h4>
              <h5>this is posts</h5>
              <h6>this is posts</h6>
          </main>
      </>
  )
}
