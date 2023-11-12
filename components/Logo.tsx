"use client"

import Link from "next/link"
import temp from "@logo/temp.svg";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";

function Logo() {
  return (
    <Link href="/" prefetch={false} className="overflow-hidden">
    <div className="flex items-center w-72 h-14">
        <AspectRatio 
        ratio={16/9}
        className="flex items-center justify-center">
            <Image src={temp} alt="logo" className="dark:filter dark:invert" width={100} height={100} />
        </AspectRatio> 
    </div>
    </Link>
  )
}

export default Logo