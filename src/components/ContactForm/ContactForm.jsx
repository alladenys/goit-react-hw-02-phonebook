import React, { Component } from 'react';
import style from './ContactForm.module.css';



class ContactForm extends Component {
    state = {
        name: '',
        number: '',
        id:''
    }
    render() {
        return (
                <form className={style.form}>
                <label className={style.label}>
                    <span className={style.title}>Name</span>
                    <input
                        className={style.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                    />
                </label>
                <label className={style.label}>
                    <span className={style.title}>Number</span>
                    <input
                        className={style.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                    />
                </label>
                <button className={style.button} type="submit">Add contact</button>
            </form>
        )
    }

}

export default ContactForm;