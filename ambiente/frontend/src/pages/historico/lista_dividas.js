import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './lista_dividas.css'
import Posts from './components/posts'
import Pagination from './components/pagination'

import Logo from './img/logo.png';
import Voltar from './img/voltar.svg';
import Flex from './img/logo-flex.svg';
import Paper from '@material-ui/core/Paper';

import {Link} from 'react-router-dom'


const Divida = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(8);


    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:8000/api/v1/listadividas');
            setPosts(res.data.result);
            setLoading(false)
        }
        fetchPosts();
    }, []);

    //Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    //Chage page
    const paginate = pageNumber => setCurrentPage(pageNumber)
    return (
        <div className="principal">
            <div className="back">
                <Link to="/blackbox" alt="Voltar">
                    <div className="back-v2d" style={{ marginTop: 20, marginLeft: 20 }}>
                        <span><img src={Voltar} alt="Voltar" style={{ marginTop: 3, marginRight: 3 }} /></span>
                        <span className="textBack">Voltar ao PAD</span>
                    </div>
                </Link>
            </div>

            <div className="main-container">
                <div className="form-box">
                    <Paper className="tam">
                        <div className="box-logo">
                            <img className="logo" src={Logo} />
                        </div>
                        <Posts posts={currentPosts} loading={loading} />
                        <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
                    </Paper>
                </div>
            </div>

            <div className="footer-flex not-visible-mobile">
                <span className="footer-Text">Powered by </span>
                <img src={Flex} alt="logo" />
            </div>
        </div>
    );
}
export default Divida;