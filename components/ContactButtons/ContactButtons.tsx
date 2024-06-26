import { AiFillInstagram } from "react-icons/ai";
import { LiaTelegram } from "react-icons/lia";
import { RiYoutubeFill } from "react-icons/ri";

export const ContactButtons = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <a
        href="https://t.me/shin_videography"
        target="_blank"
        className="bg-primary h-[50px] sm:h-[60px] pl-8 pr-6 text-xl font-semibold rounded-sm inline-flex items-center gap-3"
      >
        Написать мне <LiaTelegram className="text-2xl" />
      </a>

      <div className="flex items-center gap-4">
        <a
          href="https://www.youtube.com/@shin_videography716"
          target="_blank"
          className={
            "w-[50px] h-[50px] text-2xl sm:w-[60px] sm:h-[60px] sm:text-3xl border-2 border-primary box-border rounded-sm text-primary inline-flex justify-center items-center" +
            " hover:bg-primary hover:text-white transition"
          }
        >
          <RiYoutubeFill />
        </a>

        <a
          href="https://www.instagram.com/shin_videography/"
          target="_blank"
          className={
            "w-[50px] h-[50px] text-2xl sm:w-[60px] sm:h-[60px] sm:text-3xl border-2 border-primary box-border rounded-sm text-primary inline-flex justify-center items-center" +
            " hover:bg-primary hover:text-white transition"
          }
        >
          <AiFillInstagram />
        </a>
      </div>
    </div>
  );
};
