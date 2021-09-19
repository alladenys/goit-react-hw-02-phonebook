import React from 'react';
import style from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ contacts }) => (
  <div>
    <span className={style.name}>{contacts.name}:</span>
    <span className={style.number}>{contacts.number}</span>
  </div>
);

ContactItem.propTypes = {
  contacts: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};

export default ContactItem;
