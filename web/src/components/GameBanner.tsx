import * as Dialog from "@radix-ui/react-dialog";
import { ViewGameAds } from "./ViewGameAds";

interface GameBannerProps {
  gameId: string,
  bannerUrl: string;
  title: string;
  adsCount: number;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="relative rounded-lg overflow-hidden keen-slider__slide">
        <img src={props.bannerUrl}></img>
        <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
          <strong className="text-sm font-bold text-white block">
            {props.title}
          </strong>
          <span className="text-zinc-300 text-sm block">
            {props.adsCount} anúncio(s)
          </span>
        </div>
      </Dialog.Trigger>
      <ViewGameAds name={props.title} banner={props.bannerUrl} id={props.gameId}/>
    </Dialog.Root>
  );
}
