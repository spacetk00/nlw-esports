import { Ad } from "../ViewGameAds";
import { DayBadge } from "./DayBadge"; 

import { DiscordLogo } from "phosphor-react";


export function AdCard(props: Ad) {
  function convertWeekDays(weekDays: Array<string>) {
    let wa = weekDays.map((day) => {
      switch (day) {
        case '0':
          return <DayBadge day="Dom"/>
        case '1':
          return <DayBadge day="Seg"/>
        case '2':
          return <DayBadge day="Ter"/>
        case '3':
          return <DayBadge day="Qua"/>
        case '4':
          return <DayBadge day="Qui"/>
        case '5':
          return <DayBadge day="Sex"/>
        default:
          return <DayBadge day="Sab"/>
      }
    })
    return wa;
  }
  return (
    <div className="bg-zinc-900 w-72 sm:w-96 p-5 mb-4 rounded">
      <div className="py-1">
        <p className="text-slate-400">Nome</p>
        <p className="font-bold">{props.name}</p>
      </div>
      <div className="py-1">
        <p className="text-slate-400">Discord</p>
        <p className="flex items-center font-bold"><DiscordLogo size={22}/><span className="ml-2">{props.discord}</span></p>
      </div>
      <div className="py-1">
        <p className="text-slate-400">Disponibilidade</p>
        <p className="flex">{convertWeekDays(props.weekDays)}</p>
        <p className="font-bold">
          {props.hourStart} - {props.hourEnd}
        </p>
      </div>
      <div className="py-1">
        <p className="text-slate-400">Experiência de Jogo</p>
        <p className="font-bold">{props.yearsPlaying}</p>
      </div>
      <div className="py-1">
        <p className="text-slate-400">Chamada de Voz</p>
        <p
          className={`font-bold text-slate-900 ${
            props.useVoiceChannel ? "text-green-400" : "text-red-500"
          }`}
        >{`${props.useVoiceChannel ? "Sim" : "Não"}`}</p>
      </div>
    </div>
  );
}
