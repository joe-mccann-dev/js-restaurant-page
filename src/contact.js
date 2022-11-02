import contactsList from './contactsList'

export default function showContacts(staticDiv, currentModule) {
  const contacts = contactsList();
  const contactContainer = document.createElement('div');
  const contactHeader = document.createElement('h2');
  contactHeader.textContent = 'Contact Us'
  contactHeader.classList.add('contact_header');
  contactContainer.appendChild(contactHeader);
  const contactList = document.createElement('ul');

  contacts.forEach((contact) => {
    let listing;
    for (const _detail in contact) {
      listing = createListing(contact, contactList);
    }
    contactList.appendChild(listing);
  });

  contactContainer.appendChild(contactList);
  currentModule.appendChild(contactContainer);
  staticDiv.appendChild(currentModule);
  return staticDiv;
}

function createListing(contact) {
  const listing = document.createElement('li');

  const name = document.createElement('h3');
  name.classList.add('contact_name');
  name.textContent = contact['name'];
  listing.appendChild(name);

  const detail = document.createElement('p');
  detail.classList.add('contact_detail');
  detail.textContent = contact['detail'];
  listing.appendChild(detail);

  return listing;
}
