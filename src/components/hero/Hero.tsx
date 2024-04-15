import Image from "next/image";
import { BiSolidChevronDown } from "react-icons/bi";
import hero from "../../../public/119042024_960861011082618_6769876556572508169_n.jpg";
export default function Hero() {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden lg:h-[88vh]">
      <div className="left-0 top-0 -z-20 h-full w-full overflow-hidden lg:fixed ">
        <Image
          src={hero}
          alt="..."
          fill={true}
          className="object-cover object-bottom"
        />
        <div className="absolute left-0 top-0 z-10 h-full w-full bg-black/60" />
        <div className="absolute left-1/2 top-[76vh] z-20 -translate-x-1/2 -translate-y-1/2 lg:top-[84vh]">
          <BiSolidChevronDown className="animate-bounce text-2xl text-white" />
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 z-20 flex max-w-screen-md -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center space-y-4 rounded-xl border border-white/20 p-12 text-center text-white/80">
        <div className="absolute left-0 top-0 -z-10 h-full w-full bg-white/10 blur-3xl" />
        <div>
          <h2 className="text-sm tracking-widest">Fotograf Siedlce</h2>
          <p className=" my-1 w-max text-2xl font-bold tracking-wider lg:text-4xl">
            Miło Cię widzieć
          </p>
          <p className="text-sm tracking-widest">Jarosław</p>
        </div>
        <h1 className="text-white/60">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facere
          soluta quidem voluptate at illum excepturi repellat. Veritatis eius
          sunt asperiores ipsam?
        </h1>
      </div>
    </div>
  );
}
