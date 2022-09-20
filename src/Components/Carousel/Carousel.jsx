import React, { useState } from 'react';
import BoloPacoca from "./Imagens/boloPacoca.jpg"
import BoloPacocaInteiro from "./Imagens/boloPacocaInteiro.jpg"
import { Image,Carousel } from "react-bootstrap";
import "./CSS/style.css"

const Carrossel = () => {
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };
    return (
            <div>
                <Carousel className="h-40" variant="dark" activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <Image
                            className="d-block w-100 h-auto mx-auto"
                            src={BoloPacoca}
                            alt="Bolo de Paçoquinha" />
                        <Carousel.Caption>
                            <p id="p-carrosel">Bolo de Paçoquinha.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Image 
                            id="sapato-img"
                            className="d-block w-100 h-auto mx-auto"
                            src={BoloPacocaInteiro}
                            alt="Bolo de Paçoquinha Inteiro" />
                        <Carousel.Caption>
                            <p id="p-carrosel">Bolo de Paçoquinha Inteiro.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
    )
}


export default Carrossel;
