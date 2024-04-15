import { MenuBurgerProps } from "@/types/types";

export default function MenuBurger({
  handleShowMenu,
  showMenu,
}: MenuBurgerProps) {
  const burgerClass = "h-px w-4 bg-white duration-300";

  return (
    <button
      onClick={handleShowMenu}
      className="z-[999] flex flex-col items-center justify-center space-y-1.5 p-1 lg:hidden"
    >
      <div
        className={`${burgerClass} transition-transform ${showMenu ? "translate-y-1.5 rotate-[405deg]" : ""}`}
      />
      <div
        className={`${burgerClass} transition-opacity ${showMenu ? "opacity-0" : ""}`}
      />
      <div
        className={`${burgerClass} transition-transform ${showMenu ? "-translate-y-2 -rotate-45" : ""}`}
      />
    </button>
  );
}
