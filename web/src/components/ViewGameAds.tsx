import { useEffect, useState } from "react";

import axios from "axios";

import * as Dialog from "@radix-ui/react-dialog";

import { X } from "phosphor-react";

import { AdCard } from "./AdCard/AdCard";

interface GameProps {
  id: string;
  name: string;
  banner: string;
}

export interface Ad {
  id: string;
  name: string;
  discord: string;
  hourStart: string;
  hourEnd: string;
  useVoiceChannel: boolean;
  weekDays: string[];
  yearsPlaying: number;
}

export function ViewGameAds(props: GameProps) {
  const [ads, setAds] = useState<Ad[]>([]);

  useEffect(() => {
    axios(`http://localhost:3333/games/${props.id}/ads`).then((response) => {
      setAds(response.data);
    });
  }, []);

  return (
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/80 inset-0 fixed" />

      <Dialog.Content className="fixed bg-[#2A2634] py-6 px-4 md:px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[320px] sm:w-[680px] shadow-lg shadow-black/25">
        <div className="flex justify-between">
          <Dialog.Title className="text-xl text-center sm:text-left sm:text-3xl font-black mb-5">
            {props.name}
          </Dialog.Title>

          <Dialog.Close className="flex ">
            <X size={28} color="lightGrey"/>
          </Dialog.Close>
        </div>

        <div className="pt-1 bg-nlw-gradient mb-5 self-center rounded-lg overflow-hidden w-[100%]"></div>

        <div className="flex flex-wrap justify-center sm:justify-between align-center">
          <img src={props.banner} className="h-52 sm:h-64 mb-3" alt="Imagem do Jogo" />
          <div className="overflow-y-auto max-h-[364px]">
            {ads.length ? ads.map((ads) => {
              return (
                <AdCard
                  key={ads.id}
                  id={ads.id}
                  name={ads.name}
                  discord={ads.discord}
                  weekDays={ads.weekDays}
                  hourStart={ads.hourStart}
                  hourEnd={ads.hourEnd}
                  yearsPlaying={ads.yearsPlaying}
                  useVoiceChannel={ads.useVoiceChannel}
                />
              );
            }) : <div className="bg-zinc-900 self-center w-72 sm:w-96 p-5 mb-4 rounded">Não há anúncios para este jogo</div>}
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
