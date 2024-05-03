"use client";

type Props = {
  img: string;
  title: string;
  price: number;
};

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

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
    <div className="relative z-50 mx-12 flex-1" ref={inputRef}>
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

      <ul className="fixed z-50 flex flex-col items-center justify-center space-y-2 bg-white">
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
  );
}