import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Router from "next/router";
import { useEffect } from "react";
import Link from 'next/link';


export default function Home() {
  useEffect(()=>{
    Router.prefetch("/posts");
  },[]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a onClick={()=> Router.push("/posts")}>Posts</a>
        <Link href="/posts/[id]" as={"/posts/1"}>Post 1</Link>
        <a onClick={()=> Router.push("/store")}>Store</a>
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
