import React from 'react';
import style from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
    <label className={style.label}>
        <input
            className={style.input}
            type="text"
            value={value}
            onChange={onChange}
        />
    </label>
)

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange:PropTypes.func.isRequired
};



export default Filter;