import Image from "next/image";
import Link from "next/link";

export default function Back() {
  return(
    <div>
    <Link href={"/"} passHref>
      <Image
        src="/back.png"
        alt="click" 
        width={250}
        height={180}
        priority
      />
    </Link>
    </div>
  )
}