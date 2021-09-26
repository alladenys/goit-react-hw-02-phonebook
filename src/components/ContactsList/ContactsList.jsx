import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import style from './ContactsList.module.css';

const ContactsList = ({ contacts}) => (<ul className={style.list}>
    {contacts.map((contacts)=>(<li key={contacts.id}><ContactItem contacts={contacts}></ContactItem></li>))}
    </ul>
)
export default ContactsList;

