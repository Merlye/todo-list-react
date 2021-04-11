import React, { Fragment, useState } from "react";

import { Liste } from './Liste'
const defaultTodos =
    [
        { id: 1, label: "exemple de tâche" }
    ]

export const Todo = () => {

    const [textField, setTextField] = useState('');
    const [todos, setTodos] = useState(defaultTodos);
    const [visible, setVisible] = useState(false);


    const ajoutTache = (e) => {

        e.preventDefault()
        if (textField === '') {
            return null;
        }

        try {
            setTodos([...todos, { id: todos.length + 1, label: textField }])
            setTextField('')

        } catch (error) {
            console.error(error.message);
        }
    };

    const modificationTache = (todoId, newTextField) => {

        try {

            if (newTextField !== '') {
                const nouvelleTodos = [...todos]
                nouvelleTodos.find(todo => todo.id === todoId).label = newTextField;
                setTodos(nouvelleTodos);
                setVisible(!visible)
            }
        } catch (error) {

        }
    };

    const suppressionTache = (id) => {
        try {
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (error) {
            console.error(error.message)
        }
    };

    return (
        <Fragment>
            <form className='form1' onSubmit={ajoutTache}>
                <input
                    type="text"
                    className="champTexte"
                    placeholder="Entrer une tâche"
                    value={textField}
                    onChange={e => setTextField(e.target.value)} />
                <button className="bouton1">Ajouter</button>
            </form>
            <Liste todos={todos} modificationTache={modificationTache} suppressionTache={suppressionTache} setVisible={setVisible} visible={visible} />
        </Fragment >
    )
}