import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router'


export default function Muppar() {
  return (
    <>
      <Head>
        <title>Muppar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{textAlign: "center"}}>
        <h1>Muppar</h1>
        <Link href={"/muppar"} passHref>
          <Image
            src="/sam.jpg"
            alt="click" 
            width={250}
            height={180}
            priority
          />
        </Link>
        <Link href={"/muppar"} passHref>
          <Image
            src="/scooter.jpg"
            alt="click" 
            width={250}
            height={180}
            priority
          />
        </Link>
      </main>
    </>
  );
}