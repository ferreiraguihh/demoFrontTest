import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Posts = ({ posts, loading }) => {
    if (loading) {
        return <h2>Loading ...</h2>
    }


    return (
        <div>


            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <TableCell>Data</TableCell>
                        <TableCell>Valor</TableCell>
                        <TableCell>Nome</TableCell>
                        <TableCell>Telefone</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Repetir Ligação</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {posts.map(post => (
                        <TableRow>
                            <TableCell>{post.dt_criacao}</TableCell>
                            <TableCell>{post.valor}</TableCell>
                            <TableCell>{post.nome}</TableCell>
                            <TableCell>{post.telefone}</TableCell>
                            <TableCell>{post.status}</TableCell>
                            <TableCell className="ligar"><button className="btn-ligar">ligar</button></TableCell>
                        </TableRow>
                    ))}

                </TableBody>

            </Table>
        </div>
    )
};

export default Posts