import styled from "styled-components";
import Navbar from "../Navbar/Navbar";
import { IoAddCircleOutline } from "react-icons/io5";
import { IoRemoveCircleOutline } from "react-icons/io5";
import { Navigate } from "react-router-dom";
export default function Registries() {

    return (
        <>
            <Navbar />
            <Container>
                <ListTransactions>
                    <span>Não há registros de
                        <br>
                        </br> entrada ou saída</span>
                </ListTransactions>
                
                <Rodape>
                    <EnterBox onClick={()=> Navigate("/novaentrada")}>
                        <span><IoAddCircleOutline color="#ffffff" size="30px" /></span>

                        <p>Nova entrada</p>
                    </EnterBox>

                    <OutBox>
                        <IoRemoveCircleOutline color="#ffffff" size="30px" />
                        <p>Nova<br></br>saída</p>
                    </OutBox>
                </Rodape>

            </Container>
        </>
    )
}

const Container = styled.div`
background-color: #8C11BE;
height: 120vh;
position: fixed;
right:0;
left:0;
top: 0;
`
const ListTransactions = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 62vh;
padding: 10%;
margin-top: 120px;
margin-right: 25px;
margin-left: 25px;
margin-bottom: 50px;
border-radius: 5px;
background-color: #ffffff;
color: #868686;
font-family: Raleway;
fon-size:20px;
span{
    display:flex;
    justify-content: center;
    align-items:center;
}
`
const Rodape = styled.div`
width:100%;
padding-left: 28px;
padding-right:28px;
position:fixed;
z-index: 2;
bottom: 0;
right:0;
display: flex;
justify-content: space-between;
align-items: center;

`
const EnterBox = styled.button`
background-color: #A328D6;
border-radius: 5px;
border: none;
margin-bottom: 15px;
padding-top: 1vh;
padding-bottom: 1vh;
padding-right: 15vw;
p{
    font-size: 15px;
    font-weight: bold;
    font-family: Raleway;
    color: #ffffff;
    margin-top: 70px;
}
span{
    margin-left: -65px;
}
`
const OutBox = styled.button`
background-color: #A328D6;
border-radius: 5px;
border: none;
margin-bottom: 15px;
padding-top: 1vh;
padding-bottom: 1vh;
padding-right: 30vw;
padding-left: 5px;
p{
    font-size: 15px;
    font-weight: bold;
    font-family: Raleway;
    color: #ffffff;
    margin-top: 50px;
}
`