import React from 'react';
import style from './Contact.module.css'

const Contacts = ({contacts, onDeleteContact}) => (
    <ul className={style.list}>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={style.item}>
                <p className={style.name}>{name}: <span>{number}</span></p>
            <button className={style.btn} onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
        ))}
        
    </ul>
);

export default Contacts;