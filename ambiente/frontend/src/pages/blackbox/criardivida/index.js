import React, { useState, useEffect } from 'react';
import './criardivida.css'
import { Link } from 'react-router-dom'
import Voltar from '../img/voltar.svg'
import Footer from '../img/logo-flex.svg'
import blackbox from '../img/logo.png'
import InputMask from 'react-input-mask';
import axios from 'axios';

const NewDivida = () => {

	const [ preenchido, setPreenchido ] = useState(true);
    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('')
    const [nome_cartao, setNomeCartao] = useState('')

    // useEffect(

    // );

    const changeTelefone = (e) => {
        setTelefone(e.target.value);
    };
    const changeName = (e) => {
        setNome(e.target.value);
    };
    const changeNameCartao = (e) => {
        setNomeCartao(e.target.value);
    };

    const createDebt = async() => {
        if(preenchido) {
            const putAll = {
                    nome: nome,
                    telefone: telefone,
                    nome_cartao: nome_cartao,
            }
            console.log(putAll)
            try {
                await axios.post('http://localhost:8000/api/v1/cadastrodivida',putAll)
                console.log(putAll)
                setNome("");
                setNomeCartao("");
                setTelefone("");
            } catch (err) {
                console. error(err)
            }
        }

    }

    return (
        <div>
            <div className="principal">
                <Link to="/blackbox" alt="Voltar">
                    <div className="back-v2d" style={{ marginTop: 20, marginLeft: 20 }}>
                        <span><img src={Voltar} alt="Voltar" style={{ marginTop: 3, marginRight: 3 }} /></span>
                        <span className="textBack">Voltar ao PAD</span>
                    </div>
                </Link>

                <div className="main-container">
                    <div className="form-box-criar">
                        <div className="box-logo-criar">
                            <img className="logo" src={blackbox} />
                        </div>


                        <div className="body-modal">
                            <input className="input-divida" placeholder="Nome" onChange={changeName} value={nome}/>
                            <InputMask
                                mask="(99)99999-9999"
                                maskChar=''
                                className="input-divida"
                                placeholder="Preencha aqui"
                                value={telefone}
                                onChange={changeTelefone}
                            />
                            <input className="input-divida" placeholder="Nome conforme cartão" onChange={changeNameCartao} value={nome_cartao} />
                            <div className="mani-button">
                                <div>
                                    <button className="button-voltar">voltar</button>
                                </div>
                                <div>
                                    <button className="button-continuar" onClick={createDebt}>continuar</button>
                                </div>
                            </div>
                        </div>
                        {/* <div className="list-debits">
                            <table className="table table-borderless table-striped">
                                <thead>
                                    <tr>
                                        <th className="not-visible-mobile" scope="col">Data</th>
                                        <th scope="col">Valor</th>
                                        <th scope="col">Nome</th>
                                        <th className="not-visible-mobile" scope="col">Telefone</th>
                                        <th scope="col">Status</th>
                                        <th className="not-visible-mobile" scope="col">Repetir Ligação</th>
                                        <th className="not-visible-desktop" scope="col">Ligar</th>
                                    </tr>
                                </thead>
                                <tbody id="resultados">
                                </tbody>
                            </table>
                        </div> */}
                    </div>
                </div>

                <div className="footer-flex">
                    <span className="footer-Text">Powered by </span>
                    <img src={Footer} alt="logo" />
                </div>
            </div>
        </div>
    );

}

export default NewDivida;