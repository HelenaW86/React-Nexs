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
  console.log(data);
  return (
    // <h1>Pockemons!</h1>
    data?.results?.map((pockemon) => {
      return (
        <div>
          <p>{pockemon?.name}</p>
          <Link href={`/pockemons/${pockemon?.name}`} passHref>{pockemon?.name}</Link>
        </div>
      );
    })
  );
}
