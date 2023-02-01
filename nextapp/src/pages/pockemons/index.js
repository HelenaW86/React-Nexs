import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Pockemons() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=200")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div>
        <Image
          src="/pokemon.png"
          alt="pockemon"
          width={390}
          height={180}
          priority
        />
      </div>
      {data?.results?.map((pockemon) => {
        return (
          <Link href={`/pockemons/${pockemon?.name}`} passHref>
            <div className="name-card" key={pockemon?.name}>
              {pockemon?.name}
            </div>
          </Link>
        );
      })}
    </>
  );
}
