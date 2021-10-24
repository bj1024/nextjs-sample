import type { ReactElement } from 'react'
import React, { createContext,useState, useContext } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/dashboard.module.css'

import Layout from '../components/layout'
import Counter from '../components/counter'
// import SampleComponent1 from '../components/counter'

function pad2Zero(num:number) {
  var result;
  if (num < 10) {
    result = "0" + num;
  } else {
    result = "" + num;
  }
  return result;
}


const dateToString = (dt: Date): string => {
  var res = "" + dt.getFullYear().toString()
    + "/" + pad2Zero(dt.getMonth() + 1) +
    "/" + pad2Zero(dt.getDate()) + " " + pad2Zero(dt.getHours()) + ":" +
    pad2Zero(dt.getMinutes()) + ":" + pad2Zero(dt.getSeconds()) +  '.' + dt.getMilliseconds();
  return res;

}

interface DashboardInterface {
  name: string;
  url: string;
  setName: React.Dispatch<React.SetStateAction<string>>
}

// export const DashboardCtx = createContext<DashboardInterface | null>(null);
export const DashboardCtx = createContext({} as DashboardInterface)



// Provider in your app

// const sampleDashboardContext: DashboardInterface = {
//   name: "sampleDashboardContext Name",
//   url: "http://www.example.com",
  
// };

  // onDashboardClickの関数を宣言


{/* <header className={`navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow"></header> */}
export default function Dashboard() {
  const [name, setName] = useState("-");
  const [url, setUrl] = useState("http://www.example.com");

  const setDabsoardName = (value: string) => {
    console.log(`setDabsoardName value=${value}`)
    setName(value)
  }
  const setDashboardUrl = (value:string) => {
    setUrl(value)
  }

  const dashboardContext = useContext(DashboardCtx);
  const onDashboardClick = () => {
    console.log("onDashboardClick")
    
    
    var name = dateToString(new Date())
    setDabsoardName(name)
  }
  
  return (
    <DashboardCtx.Provider value={{ name, url,setName}}>

    <div className={styles.container}>
      <Head>
        <title>Next.js + React example </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <header className={`navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow`}>

      
  <a className={`${styles['navbar-brand']} col-md-3 col-lg-2 me-0 px-3`} href="#">Company name</a>
  <button className={`${styles['navbar-toggler']} position-absolute d-md-none collapsed`} type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
    <span className={`${styles['navbar-toggler-icon']}`}></span>
  </button>
  <input className={`form-control ${styles['form-control']} ${styles['form-control-dark']} w-100`} type="text" placeholder="Search" aria-label="Search"></input>
  <div className={`navbar-nav`}>
    <div className={`nav-item text-nowrap`}>
      <a className={`nav-link px-3`} href="#">Sign out</a>
    </div>
  </div>
</header>




      <div className={`container-fluid`}>
  <div className={`row`}>
          <nav id="sidebarMenu" className={`col-md-3 col-lg-2 d-md-block bg-light sidebar collapse`}>
      <div className={`position-sticky pt-3`}>
        <ul className={`nav flex-column`}>
          <li className={`nav-item`}>
            <a className={`nav-link active`} aria-current="page" href="#">
              <span data-feather="home"></span>
              Dashboard
            </a>
          </li>
          <li className={`nav-item`} >
            <a className={`nav-link`} href="#">
              <span data-feather="file"></span>
              Orders
            </a>
          </li>
          <li className={`nav-item`} >
            <a className={`nav-link`} href="#">
              <span data-feather="shopping-cart"></span>
              Products
            </a>
          </li>
          <li className={`nav-item`}>
            <a className={`nav-link`} href="#">
              <span data-feather="users"></span>
              Customers
            </a>
          </li>
          <li className={`nav-item`}>
            <a className={`nav-link`} href="#">
              <span data-feather="bar-chart-2"></span>
              Reports
            </a>
          </li>
          <li className={`nav-item`}>
            <a className={`nav-link`} href="#">
              <span data-feather="layers"></span>
              Integrations
            </a>
          </li>
        </ul>

        <h6 className={`sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted`}>
          <span>Saved reports</span>
          <a className={`link-secondary`} href="#" aria-label="Add a new report">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul className={`nav flex-column mb-2`}>
          <li className={`nav-item`}>
            <a className={`nav-link`} href="#">
              <span data-feather="file-text"></span>
              Current month
            </a>
          </li>
          <li className={`nav-item`}>
            <a className={`nav-link`} href="#">
              <span data-feather="file-text"></span>
              Last quarter
            </a>
          </li>
          <li className={`nav-item`}>
            <a className={`nav-link`} href="#">
              <span data-feather="file-text"></span>
              Social engagement
            </a>
          </li>
          <li className={`nav-item`}>
            <a className={`nav-link`} href="#">
              <span data-feather="file-text"></span>
              Year-end sale
            </a>
          </li>
        </ul>
      </div>
    </nav>

            <main className={`col-md-9 ms-sm-auto col-lg-10 px-md-4`}>
              
      <div className={`d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom`}>
                <h1 className={`h2`}>Example</h1>
                <div>dashboardContext =[{name}]</div>

                <button onClick={() => { onDashboardClick() } }>dashboardContext</button>
        <div className={`btn-toolbar mb-2 mb-md-0`}>
          <div className={`btn-group me-2`}>
            <button type="button" className={`btn btn-sm btn-outline-secondary`}>Share</button>
            <button type="button" className={`btn btn-sm btn-outline-secondary`}>Export</button>
          </div>
          <button type="button" className={`btn btn-sm btn-outline-secondary dropdown-toggle`}>
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>
            </div>

            <h2>Counter</h2>
            <div className={``}>
              <Counter mycount={10}></Counter>
            </div>


            <h2>Graph canvas.</h2>
            <div className={``}>
            <canvas className={`my-4 w-100`} id="myChart" width="900" height="380"></canvas>
            </div>


            <h2>Section title</h2>
      <div className={`table-responsive`}>
        <table className={`table table-striped table-sm`}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>placeholder</td>
              <td>irrelevant</td>
              <td>visual</td>
              <td>layout</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>data</td>
              <td>rich</td>
              <td>dashboard</td>
              <td>tabular</td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>information</td>
              <td>placeholder</td>
              <td>illustrative</td>
              <td>data</td>
            </tr>
            <tr>
              <td>1,004</td>
              <td>text</td>
              <td>random</td>
              <td>layout</td>
              <td>dashboard</td>
            </tr>
            
          </tbody>
        </table>
            </div>
            


    </main>
  </div>
</div>


      <footer className={styles.footer}>
        
      </footer>
      </div>
      </DashboardCtx.Provider>

  )
}

Dashboard.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

// export default Home
