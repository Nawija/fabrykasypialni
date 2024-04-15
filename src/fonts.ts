import { Nanum_Gothic, Raleway, Roboto_Serif, Whisper } from "next/font/google";

export const whisper = Whisper({ subsets: ["latin"], weight: ["400"] });
export const nanum_gothic = Nanum_Gothic({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});
export const roboto_serif = Roboto_Serif({ subsets: ["latin"] });
