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
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const storedSearches = localStorage.getItem("recentSearches");
    if (storedSearches) {
      setRecentSearches(JSON.parse(storedSearches));
    }
  }, []);

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

  const modelOp = (isFocus: boolean) => {
    setIsModalOpen(isFocus);
  };
  const modelClose = () => {
    setIsModalOpen(false);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const xxx = (recentSearch: string) => {
    setSearch(recentSearch);
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

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (search.trim() !== "") {
      const updatedRecentSearches = [...recentSearches];
      if (!recentSearches.includes(search)) {
        updatedRecentSearches.unshift(search);
        if (updatedRecentSearches.length > 5) {
          updatedRecentSearches.pop();
        }
        setRecentSearches(updatedRecentSearches);
        localStorage.setItem(
          "recentSearches",
          JSON.stringify(updatedRecentSearches),
        );
      }
    }
  };
  const removeRecentSearch = (index: number) => {
    const updatedRecentSearches = [...recentSearches];
    updatedRecentSearches.splice(index, 1);
    setRecentSearches(updatedRecentSearches);
    localStorage.setItem(
      "recentSearches",
      JSON.stringify(updatedRecentSearches),
    );
  };

  return (
    <div className={`relative z-50 mx-12 flex-1`} ref={inputRef}>
      <form className="relative w-full" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          onFocus={() => modelOp(true)}
          onBlur={() => modelOp(false)}
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

      <div
        className={`${isModalOpen === true ? "absolute" : "hidden"}  left-1/2 top-full border w-full -translate-x-1/2 space-y-10 bg-gray-100 shadow-2xl px-10 py-6 z-20`}
      >
        {recentSearches.length > 0 && (
          <div className="mt-4">
            <h3 className="text-sm font-semibold text-gray-600">
              Ostatnie wyszukiwania:
            </h3>
            <ul className="mt-2">
              {recentSearches.map((recentSearch, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span
                    onClick={() => setSearch(recentSearch)}
                    className="cursor-pointer text-gray-800"
                  >
                    {recentSearch}
                  </span>
                  <button
                    onClick={() => removeRecentSearch(index)}
                    className="ml-2 text-red-500"
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {filteredProducts.length > 0 && (
          <ul className="z-50 flex flex-col items-center justify-center space-y-2">
            {filteredProducts.slice(0, 4).map((item, index) => (
              <SearchParams
                item={item}
                key={index}
                closeModal={closeModal}
                clearFilterProducts={clearFilterProducts}
              />
            ))}
          </ul>
        )}
        {isModalOpen === true &&
          filteredProducts.length < 1 &&
          search.length > 2 && <p className="text-red-500">Nie znaleziono</p>}
      </div>
    </div>
  );
}
