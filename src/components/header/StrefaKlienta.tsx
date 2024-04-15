"use client";

import { ClassNameProps } from "@/types/types";
import Link from "next/link";

export default function StrefaKlienta({ className }: ClassNameProps) {
  return (
    <Link href="/strefa" className={`${className} bg-color border  px-4 py-2 text-sm`}>
      Strefa Klienta
    </Link>
  );
}
