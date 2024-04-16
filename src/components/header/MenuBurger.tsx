import { MenuBurgerProps } from "@/types/types";

export default function MenuBurger({
  handleShowMenu,
  showMenu,
}: MenuBurgerProps) {
  const burgerClass = "h-[2px] w-5 bg-color duration-300";

  return (
    <button
      onClick={handleShowMenu}
      className="z-[999] flex flex-col items-center justify-center space-y-1.5 p-1 lg:hidden"
    >
      <div
        className={`${burgerClass} transition-transform ${showMenu ? "bg-white translate-y-2 rotate-[405deg]" : ""}`}
      />
      <div
        className={`${burgerClass} transition-opacity ${showMenu ? "bg-white opacity-0" : ""}`}
      />
      <div
        className={`${burgerClass} transition-transform ${showMenu ? "bg-white -translate-y-2 -rotate-45" : ""}`}
      />
    </button>
  );
}
