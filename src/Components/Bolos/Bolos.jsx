import React from "react";
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import BoloVanila from "./Imagens/BoloVanila.jpg"
import BoloQueijoMorango from "./Imagens/BoloQueijoMorango.jpg"
import BoloCacau from "./Imagens/BoloCacau.jpg"
import BoloCrepesMorango from "./Imagens/BoloCrepesMorango.jpg"
import { Button,Container,Card } from "react-bootstrap";


import Carrossel from "../Carousel/Carousel";

import "./CSS/styles.css"
console.log("TESTE")

const Bolos = () => {
    return (

        <div>
            <NavBar />

            <div>
                <Carrossel/>
            </div>
            
            <Container className="d-flex flex-row justify-content-center">
                <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={BoloCacau} />
                    <Card.Body>
                        <Card.Title>Bolo de Cacau</Card.Title>
                        <Card.Text>
                            Delicioso bolo com sua base feito 100% de cacau
                        </Card.Text>
                        <Button variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={BoloVanila} />
                    <Card.Body>
                        <Card.Text>
                        <Card.Title>Bolo de Baunilha</Card.Title>
                            Bolo de Baunilha com calda de frutas vermelhas 
                        </Card.Text>
                        <Button variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={BoloCrepesMorango} />
                    <Card.Body>
                        <Card.Title>Bolo Crepes de Morango</Card.Title>
                        <Card.Text>
                           Bolo com massa fina e recheio de creme de morango
                        </Card.Text>
                        <Button variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={BoloQueijoMorango} />
                    <Card.Body>
                        <Card.Title>Bolo Quijo de Morango</Card.Title>
                        <Card.Text>
                           Bolo com a base de queijo com cobertura de creme de morango
                        </Card.Text>
                        <Button variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
            </Container>


            <Footer />
        </div>
    )
}

export default Bolos
