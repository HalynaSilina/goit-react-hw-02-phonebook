import React from 'react';
import ContactListItem from 'components/ContactListItem/ContactListItem';

const ContactList = ({ contacts }) => {
  <ul>
    <ContactListItem contacts={contacts} />
  </ul>;
};

export default ContactList;
