import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <h1>NAVBAR</h1>
      {/* <Link href={"/"}>
        {" "}
        <a>Home</a>{" "}
      </Link>
      <Link href={"/muppar"}>
        <a>Muppar</a>{" "}
      </Link> */}
      <a href="/pockemons">Pokemons</a>
      <a href="/muppar">Muppar</a>
      <a href="/">Home</a>
    </nav>
  );
};
