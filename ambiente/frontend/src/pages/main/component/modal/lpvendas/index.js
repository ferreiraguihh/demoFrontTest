import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    const top = 48;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 230,
        backgroundColor: 'gainsboro',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(1, 2, 1),
        borderRadius: 20,
        textAlign: 'center',
    },
    corp: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        color: '#343434'
    },
    txt: {
        fontSize: 11,
        color: 'grey',
        marginTop: 2,
        marginBottom: 2,
    },
    input: {
        width: '87%',
        border: 0,
        backgroundColor: '#FFFFFF',
        padding: 7,
    },
    button: {
        width: '25%',
        marginTop: 10,
        border: 0,
        backgroundColor: '#FAB628',
        color: 'white',
        padding: 5,
        cursor: 'pointer',
    },
    junt: {
        display: 'flex',
        flexDirection: "column",
        alignItems: "start",
        marginTop: 7,
    },
    label: {
        fontSize: 12,
    }

}));


const ModalLp =(props) => {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
 
      
      
    return (
        <div>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={props.openModalLp}
                onClose={props.handleClose}
            >
                <div style={modalStyle} className={classes.paper}>
                    <div className={classes.corp}>
                        <h2 className={classes.title}>LP DE VENDAS</h2>
                        <p className={classes.txt}>Preencha para ter acesso a demonstração</p>
                        <div className={classes.junt}><span className={classes.label}>Nome:</span>
                            <input placeholder="Nome" className={classes.input}></input>
                        </div>
                        <div className={classes.junt}>
                            <span className={classes.label}>Telefone:</span>
                            <input placeholder="Telefone" className={classes.input}></input>
                        </div>
                        <button className={classes.button}>OK</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ModalLp;