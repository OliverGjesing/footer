import "./Lokalhistorien.css"
import React from 'react'
import Auning
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  export const Lokalhistorien = () => {
      return(
          <main className="lokalHistorienMain">
          <div className="overskriftBox">
          </div>
          <div className="lokalHistorienTekst">
            <p>Gennem flere år, var lokalopgørene mellem Auning IF og Øster Alling IF noget begge klubber så frem til. Der var stor prestige i disse opgør.
            På herresiden forsøgte de to klubber sig med holdfællesskaber, uden den store succes.
            </p>
            <p>
            I 1993 besluttes det, på de to foreningers hovedgeneralforsamlinger, at lægge håndboldafdelingerne sammen. ØAI/Auning IF, blev navnet på den nye håndboldafdeling. Sæsonen 1992/93 spillede Øster Alling IF´s bedste damehold i Serie 1 og Auning IF´s i Jyllandsserien. Auning IF rykker ned, men Øster Alling IF rykker op i Jyllandsserien. To år efter sammenlægningen, rykker holdet op i Danmarksserien.
            </p>
            <img/>
            <p>
            En målsætning for ungdomsafdelingen, blev strikket sammen, - vi ville også på "landkortet" med vores ungdomshold. Dette gav resultat første gang i 1997. Klubbens pigehold kvalificerede sig til Eliterækken. Året efter præsterede dame juniorholdet, at tilspille sig en plads i Eliterækken.
            </p>
            <p>
            I 1998 udnævnes ØAI/Auning IF til Årets Børnehåndboldklub i kreds 4, og senere samme år til Årets Børnehåndboldklub i Jylland.
            Denne hædersbevisning tildeles en klub, der yder en særlig indsats for de yngste håndboldspillere. I alderen 5-8 år havde vi på daværende tidspunkt 52 børn. Det målrettede arbejde giver vi også æren for, at afdelingen p.t. ikke mangler ulønnede trænere til ungdomsholdene.
            </p>
            <p>
            Vi arbejder på, at gøre det endnu mere attraktivt, at spille håndbold i ØAI/Auning IF. Ud over træning og kampe, arrangeres der fælles håndbold tur for alle ungdomsspillere til et stævne i udlandet, grillaften hvor også forældre og anden familie deltager, ungdommens dag i samarbejde med ungdomsklubben, juleafslutning og afslutningsfester.
            </p>
          </div>

          </main>
      )
  }

  export default Lokalhistorien