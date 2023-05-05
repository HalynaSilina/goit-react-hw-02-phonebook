import React from 'react';
import PropTypes from 'prop-types';

const ContactListItem = ({ contacts, onDelete }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        <p>
          {name}: {number}
        </p>
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    );
  });
};

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
