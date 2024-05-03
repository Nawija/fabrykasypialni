"use client";

type Props = {
  img: string;
  title: string;
  price: number;
};

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoIosCloseCircle } from "react-icons/io";

import { FaSearch } from "react-icons/fa";
import { POLECANE_PRODUKTY } from "../../constants/Links";

const SearchParams = dynamic(() => import("@/components/header/SearchParams"));

export default function SearchBar() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState(searchParams.get("szukaj") || "");
  const [filteredProducts, setFilteredProducts] = useState<Props[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("bg-hidden");
    } else {
      document.body.classList.remove("bg-hidden");
    }
  }, [isModalOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.length >= 2) {
        const filteredProducts = POLECANE_PRODUKTY.filter((product: Props) =>
          product.title.toLowerCase().includes(search.toLowerCase()),
        );
        setFilteredProducts(filteredProducts);
      } else {
        setFilteredProducts([]);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [search]);

  function modelOp() {
    setIsModalOpen(true);
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
      setFilteredProducts([]);
    }
  };

  const clearFilterProducts = () => {
    setFilteredProducts([]);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const handleSearchIconClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative flex-1 mx-12" ref={inputRef}>
      <form className="relative w-full">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          onFocus={modelOp}
          placeholder="Szukaj produktu ..."
          className="w-full rounded-md border border-color/20 p-3 text-sm outline-none"
        />
        <button type="submit">
          <FaSearch
            onClick={handleSearchIconClick}
            className="absolute right-2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-color"
          />
        </button>
      </form>
      {isModalOpen && (
        <div className="fixed left-0 top-20 z-50 max-h-80 overflow-y-scroll rounded-lg lg:left-1/2 lg:h-full lg:max-h-full lg:w-1/3 lg:-translate-x-1/2 lg:overflow-auto">
          <div className="anim-opacity w-full transform space-y-3 rounded-lg border bg-white p-3 sm:w-1/2 lg:w-full lg:p-6">
            <button
              className="absolute right-2 top-2 text-second"
              onClick={closeModal}
            >
              <IoIosCloseCircle className="text-2xl" />
            </button>
            <ul className="flex flex-col items-center justify-center space-y-2">
              {filteredProducts.slice(0, 4).map((item, index) => (
                <SearchParams
                  item={item}
                  key={index}
                  closeModal={closeModal}
                  clearFilterProducts={clearFilterProducts}
                />
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
