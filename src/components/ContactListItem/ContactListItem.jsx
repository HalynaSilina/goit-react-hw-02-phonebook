import React from 'react';

const ContactListItem = ({ contacts }) => {
  return contacts.map(({ id, name, number }) => {
    return (
      <li key={id}>
        {name}: {number}
      </li>
    );
  });
};

export default ContactListItem;
