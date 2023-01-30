import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Details() {
  const [data, setData] = useState(null);
  const router = useRouter();
  const slug  = router?.query.slug;
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  console.log(data)
  return (
    <>
      <h1>A Pockemon is Picked!</h1>
      <h2>{slug}</h2>
    <Image height={200} width={200} src={data?.sprites?.other?.dream_world?.front_default} alt={slug}/>
    <p>Types:</p>
       {data?.types?.map((type) => {
      return <span style={{display: "inline-block", margin: "3px"}}>{type?.type?.name}</span>
    })}
    <p>Abilities</p>
    {data?.abilities?.map((ability) => {
      return <span style={{display: "inline-block", margin: "3px"}}>{ability?.ability?.name}</span>
    })}
    </>
  );
}
