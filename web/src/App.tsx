import { useEffect, useState } from "react";

import axios from "axios";

import 'keen-slider/keen-slider.min.css'
import { useKeenSlider, KeenSliderPlugin } from 'keen-slider/react'

import * as Dialog from "@radix-ui/react-dialog";

import { GameBanner } from "./components/GameBanner";
import { CreateAdBanner } from "./components/CreateAdBanner";
import { CreateAdModal } from "./components/CreateAdModal";

import { CaretLeft, CaretRight } from "phosphor-react";

import logoImg from "./assets/logo-nlw-esports.svg";

import "./styles/main.css";

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

const MutationPlugin: KeenSliderPlugin = (slider) => {
  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      slider.update()
    })
  })
  const config = { childList: true }

  slider.on("created", () => {
    observer.observe(slider.container, config)
  })
  slider.on("destroyed", () => {
    observer.disconnect()
  })
}


function App() {
  const [games, setGames] = useState<Game[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slides: {
      perView: 6,
      spacing: 30
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    }
  }, [MutationPlugin]);

  useEffect(() => {
    axios("http://localhost:3333/games").then((response) => {
      setGames(response.data);
    });
  }, []);

  return (
    <div className="max-w-[1244px] mx-auto flex flex-col items-center m-20">
      <img src={logoImg} alt="" />

      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className="text-transparent bg-nlw-duo-gradient bg-clip-text">
          duo
        </span>{" "}
        está aqui
      </h1>

      <div className="flex justify-center items-center mt-16 max-w-[95%]">
        <button 
          onClick={() => instanceRef.current?.prev()}
          className="text-6xl text-white mr-4 rounded-full hover:bg-violet-600"
        >
          <CaretLeft size={50} color='white' />
        </button>
        <div ref={sliderRef} className="keen-slider">
          {games.map((game) => {
            return (
              <GameBanner
                key={game.id}
                bannerUrl={game.bannerUrl}
                title={game.title}
                adsCount={game._count.ads}
              />
            );
          })}
        </div>
        <button 
          onClick={() => instanceRef.current?.next()}
          className="text-6xl text-white ml-4 rounded-full hover:bg-violet-600"
        >
          <CaretRight size={50} color="white" />
        </button>
      </div>

      <Dialog.Root>
        <CreateAdBanner />

        <CreateAdModal />
      </Dialog.Root>
    </div>
  );
}

export default App;
