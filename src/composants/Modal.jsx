import { Fragment, useState } from "react"

export const Modal = ({ todo, modificationTache, setVisible, visible }) => {

    const [textField, setTextField] = useState(todo.label);

    return (
        <Fragment>
            <aside
                className='modal'
                style={{ transform: visible ? 'translate(0vh)' : 'translate(-100vh)', opacity: visible ? '1' : '0' }}>
                <div className='modal-conteneur'>
                    <div className='modal-header'>
                        <h2 id='titreModal'>Modifier la tâche</h2>
                    </div>
                    <div className='modal-body'>
                        <input
                            id="edit"
                            type="text"
                            className="champTexte"
                            value={textField}
                            onChange={e => setTextField(e.target.value)} />
                    </div>
                    <div className='modal-footer'>
                        <button type="button" className="bouton2" id="annuler" onClick={() => { setVisible(!visible); setTextField(todo.label) }} >Annuler</button>
                        <button type="button" className="bouton1" id="valider" onClick={() => modificationTache(todo.id, textField)} >Valider</button>
                    </div>
                </div>
            </aside>
        </Fragment>
    )
}



