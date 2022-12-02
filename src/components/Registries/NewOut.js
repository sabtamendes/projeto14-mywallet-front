import { useContext, useState } from "react";
import { IoArrowUndoSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../../contexts/UserContext";
import { postOutRegistries } from "../../services/Services";

export default function NewOut() {
    const [form, setForm] = useState({ value: "", description: "" });

    const { userData } = useContext(UserContext);

    const navigate = useNavigate();

    function handleForm(e) {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        };

        const body = {
            ...form, value: Number(form.value), type: "debit"
        }
        try {
            await postOutRegistries(body, config)

            alert("Sucesso ao cadastrar nova saída");
            navigate("/registros");

        } catch (err) {
            console.log(err);
            alert(err.response.data.message);
        }
    }
    return (
        <Container>
            
            <Header>
                <IoArrowUndoSharp color="#FFFFFF" size="25px" onClick={() => navigate("/registros")} />
                <Title>Nova saída</Title>
            </Header>
            <Form onSubmit={handleSubmit}>
                <input
                    name="value"
                    value={form.value}
                    onChange={handleForm}
                    type="number"
                    placeholder="Valor"
                    required
                />
                <input
                    name="description"
                    value={form.description}
                    onChange={handleForm}
                    type="text"
                    placeholder="Descrição"
                    required
                />
                <button type="submit">Salvar saída</button>
            </Form>
        </Container>
    )
}
const Container = styled.div`
    height: 210vw;
    padding:15%;
    background-color: #8C11BE;
`
const Form = styled.form`
    margin-top: 80px;
    input{
    margin-left: -5%;
    margin-bottom: 4%;
    width:38vh;
    padding: 15px; 
    border:1px solid #D4D4D4;
    border-radius: 5px;
    &::placeholder{
    font-family: 'Raleway', sans-serif;
    font-size:16px;
    color:#000000;
        }
    }
    button{
    margin-left: -5%;
    margin-bottom:15%;
    width:38vh;
    padding: 15px;
    font-weight:600;
    font-size: 15px;
    color: #FFFFFF;
    background-color:#A328D6;
    border-radius: 5px;
    border:none;
    }
`
const Title = styled.h1`
font-family: 'Raleway', sans-serif;
font-size: 26px;
color: #ffffff;
font-weight: bold;
margin-left: 43px;
`
const Header = styled.div`
display: flex;
`