import { useEffect, useState } from "react";

import axios from "axios";

import * as Dialog from "@radix-ui/react-dialog";

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

      <Dialog.Content className="fixed bg-[#2A2634] py-8 px-4 md:px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[320px] sm:w-[680px] shadow-lg shadow-black/25">
        <Dialog.Title className="text-xl text-center sm:text-left sm:text-3xl font-black mb-8">
          {props.name}
        </Dialog.Title>

        <div className="flex justify-between">
          <img src={props.banner} className="h-64" alt="Imagem do Jogo" />
          <div className="overflow-y-auto max-h-[370px]">
            {ads ? ads.map((ads) => {
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
            }) : <div className="bg-white">Não há anúncios para este jogo</div>}
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
