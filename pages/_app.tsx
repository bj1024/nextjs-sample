

import type { ReactElement, ReactNode } from 'react'
import React, { useState, useCallback, createContext } from "react";

import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'
// import Head from 'next/head'
// import Layout from '../components/layout'



// コンテキストを定義
const UserContext = createContext({
  // 文字列
  username: "admin",

  // 関数
  handleUpdateCompletedTask: () => {}
});


// function MyApp({ Component, pageProps }: AppProps) {
//   return (
//     <>
//       <Head>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>
//       <Component {...pageProps} />
//     </>
//   );
// }

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component {...pageProps} />)
}

