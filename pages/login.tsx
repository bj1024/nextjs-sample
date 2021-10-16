import React, { useState, useEffect } from 'react';

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
// import 'bootstrap/dist/css/bootstrap.min.css'

// import styles from '../styles/'
// import styles from  '../styles/signin.module.css'

// <div className={styles.container}>


const Home: NextPage = () => {
  
  useEffect(() => {
    document.querySelector("body")?.classList.add("text-center");
  
  });
    // {/* <div className={styles['form-signin']}> */ }
      // {/* <main className={styles['form-signin']}> */}
    // <div className="text-center">
    return (
      <main className="form-signin">
        <Head>
          <title>login page.</title>
        </Head>

          <form>
            <a href="aa">aaaa</a>
            <img className="mb-4" src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"></img>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"></input>
              <label htmlFor="floatingInput">Email address</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"></input>
                Remember me
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
          </form>
        </main>
  
  )
}

export default Home
