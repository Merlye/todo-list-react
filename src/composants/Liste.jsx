import React, { Fragment } from 'react';
import { Modal } from './Modal';

export const Liste = ({ todos, modificationTache, suppressionTache, setVisible, visible }) => {


    return (
        <Fragment>
            <table className="taches" >
                <tbody>
                    <tr>
                        <th>Tâches à effectuer</th>
                        <th>Actions</th>
                    </tr>
                    {todos.map(todo => (
                        <tr className='taches-lignes' key={todo.id} >
                            <td>{todo.label}</td>
                            <td className='action'>
                                <button type="button" className="bouton2" onClick={() => { setVisible(!visible) }}>Modifier</button>
                                <button type='button' className='bouton3' onClick={() => suppressionTache(todo.id)}>Supprimer</button>
                                <Modal todo={todo} modificationTache={modificationTache} setVisible={setVisible} visible={visible} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Fragment>
    )
}