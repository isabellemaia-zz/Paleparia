import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { SpotlightInfo } from "../../components/SpotlightInfo";
import { useFetch } from "../../hooks/swrUse";
import api, { urlW } from "../../services/api";
import { RectangleSpotlight, Spotlight, SquareSpotlight } from "./style";

interface cardsProps{
    name: string,
    about: string,
    img: string,
}

const Home = () =>{
    const [cards, setCards] = useState<cardsProps[]>([]);
 
   useEffect(() => {
     api.get("principal").then((response) => {
         const cardsInfo = response.data.Modelos.map((info: any) =>{
             const imageUrl = info.reference[0]?.url
             return{
                 name: info.modelo,
                 about: info.about,
                 img: imageUrl 
                 
                 
                }
            })
            // console.log(cardsInfo)

       setCards(cardsInfo)
       
     });
   }, []);
   console.log(cards)
return(
<>
    <Spotlight>
        <SquareSpotlight backgroundImage={urlW+cards[0]?.img}>
            <SpotlightInfo name={cards[0]?.name} link={cards[0]?.name}/>
        </SquareSpotlight>
        <SquareSpotlight backgroundImage={urlW+cards[1]?.img}>
        <SpotlightInfo name={cards[1]?.name} link={cards[1]?.name}/>


        </SquareSpotlight>
        <SquareSpotlight backgroundImage={urlW+cards[2]?.img}>
        <SpotlightInfo name={cards[2]?.name} link={cards[2]?.name}/>


        </SquareSpotlight>

        <RectangleSpotlight backgroundImage={urlW+cards[3]?.img}>
        <SpotlightInfo name={cards[3]?.name} link={cards[3]?.name}/>


        </RectangleSpotlight>
        <RectangleSpotlight backgroundImage={urlW+cards[4]?.img}>
        <SpotlightInfo name={cards[4]?.name} link={cards[4]?.name}/>


        </RectangleSpotlight>
    </Spotlight>
</>
)
}

export default Home