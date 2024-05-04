"use client";

import Link from "next/link";

type Props = {
  img: string;
  title: string;
  price: number;
};

export default function SearchParams({
  item,
  clearFilterProducts,
  closeModal,
}: {
  item: Props;
  clearFilterProducts: () => void;
  closeModal: () => void;
}) {
  const { img, title, price } = item;
  return (
    <li className="w-full rounded-lg border border-main p-4 transition-colors duration-300 hover:border-zinc-300">
      <Link
        onClick={() => {
          clearFilterProducts();
          closeModal();
        }}
        href={`/${title}`}
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
          <p className="text-black max-w-80">{title}</p>
          <div className="flex flex-col items-end justify-end text-sm">
            <p>{price}zł</p>
            {/* {prevPrice && (
              <div className="flex-c mt-2 text-sm">
                <p className="mr-2 text-xs text-yellow-500">Promocja</p>
                <small className=" text-red-700 line-through">
                  {prevPrice}zł
                </small>
              </div>
            )} */}
          </div>
        </div>
      </Link>
    </li>
  );
}
