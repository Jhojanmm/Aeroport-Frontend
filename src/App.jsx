import { useState, useEffect } from "react";
import { Load } from './services/reservas'
import { Heading, Box, Image, Flex, Center, Text, Spacer, Tag, Button } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import "./sillas.css";

let count = [];
export default function Sillas() {
    

    let seatsAdded = [54,26,39]
    
    const [reservas, setReservas] = useState([]);

    function add(e, seat) {
        e.preventDefault();
        let k = 0;
        let check = false;
        if (seatsAdded.length < 3) {
            for (let i = 0; i < seatsAdded.length; i++) {
                if (seatsAdded[i] === seat) {
                    console.log("Eliminado: ", seatsAdded[i])
                    seatsAdded.splice(i, 1);
                    check = true;
                    break
                }

            }

            if (!check) {
                seatsAdded.push(seat)
                console.log("Agregando: ", seat)
            }

        } else {
            for (let i = 0; i < seatsAdded.length; i++) {
                if (seatsAdded[i] === seat) {
                    console.log("Eliminado: ", seatsAdded[i])
                    seatsAdded.splice(i, 1);
                    check = true;
                    break
                }

            }

            if (!check) {
                console.log("Limite maximo de sillas")
                
            }

        }


        console.log("Lista SeatsAddeds",seatsAdded)
        aux = seatsAdded.length
        console.log(aux)
    }

    let aux = seatsAdded.length

    function getList(){
        return seatsAdded
    }

    useEffect(() => {
        Load(setReservas);
    }, [])


    for (let i = 0; i < 60; i++) {
        count.push(i)

    }

    // {reservas.map((reservas) => (
    //   count.push(reservas.idSilla)

    // ))}



    return (
        <>
        

            <Center>
                <Heading as="h1" size="4xl" p={5}>
                    <Box width={400} background="orange.200" borderRadius={20} p={10} m={5} textAlign="center">
                        Sillas
                    </Box>
                </Heading>

            </Center>



            <Center>

                <div class="row" >

                    <div onClick={(e) => add(e, count[0])} id="silla" class="silla">{count[0]}</div>
                    <div class="silla" onClick={(e) => add(e, count[1])}>{count[1]}</div>
                    <Button margin={10}></Button>
                    <div class="silla" onClick={(e) => add(e, count[2])}>{count[2]}</div>
                    <div class="silla" onClick={(e) => add(e, count[3])}>{count[3]}</div>
                </div>
            </Center>
            <Center>

                <div class="row">

                    <div class="silla" onClick={(e) => add(e, count[4])}>{count[4]}</div>
                    <div class="silla" onClick={(e) => add(e, count[5])}>{count[5]}</div>
                    <Button margin={10}></Button>
                    <div class="silla" onClick={(e) => add(e, count[6])}>{count[6]}</div>
                    <div class="silla" onClick={(e) => add(e, count[7])}>{count[7]}</div>
                </div>
            </Center>
            <Center>
                <div class="row">

                    <div class="silla" onClick={(e) => add(e, count[8])}>{count[8]}</div>
                    <div class="silla" onClick={(e) => add(e, count[9])}>{count[9]}</div>
                    <div class="silla" onClick={(e) => add(e, count[10])}>{count[10]}</div>
                    <Button margin={10}></Button>
                    <div class="silla" onClick={(e) => add(e, count[11])}>{count[11]}</div>
                    <div class="silla" onClick={(e) => add(e, count[12])}>{count[12]}</div>
                    <div class="silla" onClick={(e) => add(e, count[13])}>{count[13]}</div>
                </div>

            </Center>
            <Center>
                <div class="row">

                    <div class="silla" onClick={(e) => add(e, count[14])}>{count[14]}</div>
                    <div class="silla" onClick={(e) => add(e, count[15])}>{count[15]}</div>
                    <div class="silla" onClick={(e) => add(e, count[16])}>{count[16]}</div>
                    <Button margin={10}></Button>
                    <div class="silla" onClick={(e) => add(e, count[17])}>{count[17]}</div>
                    <div class="silla" onClick={(e) => add(e, count[18])}>{count[18]}</div>
                    <div class="silla" onClick={(e) => add(e, count[19])}>{count[19]}</div>
                </div>

            </Center>
            <Center>
                <div class="row">

                    <div class="silla" onClick={(e) => add(e, count[20])}>{count[20]}</div>
                    <div class="silla" onClick={(e) => add(e, count[21])}>{count[21]}</div>
                    <div class="silla" onClick={(e) => add(e, count[22])}>{count[22]}</div>
                    <Button margin={10}></Button>
                    <div class="silla" onClick={(e) => add(e, count[23])}>{count[23]}</div>
                    <div class="silla" onClick={(e) => add(e, count[24])}>{count[24]}</div>
                    <div class="silla" onClick={(e) => add(e, count[25])}>{count[25]}</div>
                </div>

            </Center>
            <Center>
                <div class="row">

                    <div class="silla" onClick={(e) => add(e, count[26])}>{count[26]}</div>
                    <div class="silla" onClick={(e) => add(e, count[27])}>{count[27]}</div>
                    <div class="silla" onClick={(e) => add(e, count[28])}>{count[28]}</div>
                    <Button margin={10}></Button>
                    <div class="silla" onClick={(e) => add(e, count[29])}>{count[29]}</div>
                    <div class="silla" onClick={(e) => add(e, count[30])}>{count[30]}</div>
                    <div class="silla" onClick={(e) => add(e, count[31])}>{count[31]}</div>
                </div>

            </Center>
            <Center>
                <div class="row">

                    <div class="silla" onClick={(e) => add(e, count[32])}>{count[32]}</div>
                    <div class="silla" onClick={(e) => add(e, count[33])}>{count[33]}</div>
                    <div class="silla" onClick={(e) => add(e, count[34])}>{count[34]}</div>
                    <Button margin={10}></Button>
                    <div class="silla" onClick={(e) => add(e, count[35])}>{count[35]}</div>
                    <div class="silla" onClick={(e) => add(e, count[36])}>{count[36]}</div>
                    <div class="silla" onClick={(e) => add(e, count[37])}>{count[37]}</div>
                </div>

            </Center>
            <Center>
                <div class="row">

                    <div class="silla" onClick={(e) => add(e, count[38])}>{count[38]}</div>
                    <div class="silla" onClick={(e) => add(e, count[39])}>{count[39]}</div>
                    <div class="silla" onClick={(e) => add(e, count[40])}>{count[40]}</div>
                    <Button margin={10}></Button>
                    <div class="silla" onClick={(e) => add(e, count[41])}>{count[41]}</div>
                    <div class="silla" onClick={(e) => add(e, count[42])}>{count[42]}</div>
                    <div class="silla" onClick={(e) => add(e, count[43])}>{count[43]}</div>
                </div>

            </Center>
            <Center>
                <div class="row">

                    <div class="silla" onClick={(e) => add(e, count[44])}>{count[44]}</div>
                    <div class="silla" onClick={(e) => add(e, count[45])}>{count[45]}</div>
                    <div class="silla" onClick={(e) => add(e, count[46])}>{count[46]}</div>
                    <Button margin={10}></Button>
                    <div class="silla" onClick={(e) => add(e, count[47])}>{count[47]}</div>
                    <div class="silla" onClick={(e) => add(e, count[48])}>{count[48]}</div>
                    <div class="silla" onClick={(e) => add(e, count[49])}>{count[49]}</div>
                </div>

            </Center>

            <Center>
                <Link to={`/create/${seatsAdded}`}>
                <Button>
                Continuar
                </Button>
                </Link>
            </Center>







        </>
    )












}