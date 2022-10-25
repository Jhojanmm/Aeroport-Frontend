import { useState, useEffect } from "react";
import { Load } from './services/reservas'
import { Heading, Box, Image, Flex, Center, Text, Spacer, Tag, Button } from '@chakra-ui/react';

let count = [];

export default function Sillas() {
    const [reservas, setReservas] = useState([]);



    useEffect(() => {
        Load(setReservas);
    }, [])

    {reservas.map((reservas) => (
        count.push(reservas.idSilla)

    ))}

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

                    <button>{count[0]}</button>
                    <button>{count[1]}</button>
                    <Button margin={10}></Button>
                    <button>{count[2]}</button>
                    <button>{count[3]}</button>
                </div>
            </Center>
            <Center>

                <div class="row">

                    <button>{count[4]}</button>
                    <button>{count[5]}</button>
                    <Button margin={10}></Button>
                    <button>{count[6]}</button>
                    <button>{count[7]}</button>
                </div>
            </Center>
            <Center>
                <div class="row">

                    <button>{count[8]}</button>
                    <button>{count[9]}</button>
                    <button>{count[10]}</button>
                    <Button margin={10}></Button>
                    <button>{count[11]}</button>
                    <button>{count[12]}</button>
                    <button>{count[13]}</button>
                </div>

            </Center>
            <Center>
                <div class="row">

                    <button>{count[14]}</button>
                    <button>{count[15]}</button>
                    <button>{count[16]}</button>
                    <Button margin={10}></Button>
                    <button>{count[17]}</button>
                    <button>{count[18]}</button>
                    <button>{count[19]}</button>
                </div>

            </Center>
            <Center>
                <div class="row">

                    <button>{count[20]}</button>
                    <button>{count[21]}</button>
                    <button>{count[22]}</button>
                    <Button margin={10}></Button>
                    <button>{count[23]}</button>
                    <button>{count[24]}</button>
                    <button>{count[25]}</button>
                </div>

            </Center>
            <Center>
                <div class="row">

                    <button>{count[26]}</button>
                    <button>{count[27]}</button>
                    <button>{count[28]}</button>
                    <Button margin={10}></Button>
                    <button>{count[29]}</button>
                    <button>{count[30]}</button>
                    <button>{count[31]}</button>
                </div>

            </Center>
            <Center>
                <div class="row">

                    <button>{count[32]}</button>
                    <button>{count[33]}</button>
                    <button>{count[34]}</button>
                    <Button margin={10}></Button>
                    <button>{count[35]}</button>
                    <button>{count[36]}</button>
                    <button>{count[37]}</button>
                </div>

            </Center>
            <Center>
                <div class="row">

                    <button>{count[38]}</button>
                    <button>{count[39]}</button>
                    <button>{count[40]}</button>
                    <Button margin={10}></Button>
                    <button>{count[41]}</button>
                    <button>{count[42]}</button>
                    <button>{count[43]}</button>
                </div>

            </Center>
            <Center>
                <div class="row">

                    <button>{count[44]}</button>
                    <button>{count[45]}</button>
                    <button>{count[46]}</button>
                    <Button margin={10}></Button>
                    <button>{count[47]}</button>
                    <button>{count[48]}</button>
                    <button>{count[49]}</button>
                </div>

            </Center>







        </>
    )












}