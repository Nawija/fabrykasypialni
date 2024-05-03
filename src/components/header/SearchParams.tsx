"use client";

import Image from "next/image";
import Link from "next/link";
import { PortfolioItem } from "../types";

export default function SearchParams({
  item,
  clearFilterProducts,
  closeModal,
}: {
  item: PortfolioItem;
  clearFilterProducts: () => void;
  closeModal: () => void;
}) {
  const { id, img, title, price, prevPrice } = item;
  return (
    <li className="bg-body border-main w-full rounded-lg border p-2 transition-colors duration-300 hover:border-zinc-300">
      <Link
        onClick={() => {
          clearFilterProducts();
          closeModal();
        }}
        href={`/szablony/${id}`}
        className="bg-body flex items-start justify-between space-x-2 p-2"
      >
        <img
          alt="..."
          src={img}
          className="h-16 w-28 rounded-lg object-cover object-top"
          height={55}
          width={110}
        />
        <div className="flex flex-col items-end justify-end">
          <p className="text-black">{title}</p>
          <div className="flex flex-col items-end justify-end text-sm">
            <p>{price}zł</p>
            {prevPrice && (
              <div className="flex-c mt-2 text-sm">
                <p className="mr-2 text-xs text-yellow-500">Promocja</p>
                <small className=" text-red-700 line-through">
                  {prevPrice}zł
                </small>
              </div>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
}