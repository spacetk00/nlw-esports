import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export function CreateAdBanner() {
  return (
    <div className="pt-1 bg-nlw-gradient self-center rounded-lg mt-8 overflow-hidden w-[90%] md:w-[85%]">
      <div className="bg-[#2A2634] px-10 py-2 md:px-8 md:py-6 flex flex-wrap justify-center md:justify-between items-center">
        <div>
          <strong className="text-md md:text-lg lg:text-2xl text-center md:text-left my-1 text-white font-black block">
            Não encontrou o seu duo?
          </strong>
          <span className="text-xs md:text-md text-center md:text-left text-zinc-400 block">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>

        <Dialog.Trigger className="py-3 px-4 bg-violet-400 hover:bg-violet-600 text-white rounded flex items-center gap-3 my-3 md:my-0">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  );
}
