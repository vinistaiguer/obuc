import React from "react";
import NavBar from "../NavBar/NavBar"
import Footer from "../Footer/Footer"
import KitDoce from "./Imagens/KitDoce.jpg"
import KitLanche from "./Imagens/KitLanche.jpg"
import KitSalgado from "./Imagens/KitSalgado.jpg"
import KitDiet from "./Imagens/KitDiet.jpg"
import { Button,Container,Card } from "react-bootstrap";

import CarouselKitPresente from "../CarouselKitPresente/CarouselKitPresente";

// import "./CSS/styles.css"
console.log("TESTE")

// const produtos = [
//     {

//     }
// ]

const KitPresente = () => {
    return (

        <div>
            <NavBar />

            <div>
                <CarouselKitPresente/>
            </div>
            
            <Container className="d-flex flex-row justify-content-center">
                <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={KitDoce} />
                    <Card.Body>
                        <Card.Title>Kit Doce</Card.Title>
                        <Card.Text>
                            Kit doce grãos
                        </Card.Text>
                        <Button variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={KitLanche} />
                    <Card.Body>
                        <Card.Title>Kit Lanche</Card.Title>
                        <Card.Text>
                            Kit Lanche para  
                        </Card.Text>
                        <Button variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={KitDiet} />
                    <Card.Body>
                        <Card.Title>Kit Diet</Card.Title>
                        <Card.Text>
                            Kit Diet, paque quem leva uma vida mais saudável
                        </Card.Text>
                        <Button variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
                <Card className="m-4" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={KitSalgado} />
                    <Card.Body>
                        <Card.Title>Kit Salgado</Card.Title>
                        <Card.Text>
                            Kit Salgado para aquele café da tarde em família
                        </Card.Text>
                        <Button variant="danger">Comprar</Button>
                    </Card.Body>
                </Card>
            </Container>


            <Footer />
        </div>
    )
}

export default KitPresente;
