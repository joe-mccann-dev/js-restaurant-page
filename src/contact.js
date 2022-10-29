export default function showContacts(staticDiv, currentModule) {
  const contacts = [
    {
      name: 'catering',
      detail: '555-555-1234'
    },
    {
      name: 'general inquiries',
      detail: '555-555-5678'
    },
    {
      name: 'address',
      detail: '989 Garden Boulevard, Somewhere, New England 22112'
    },
    {
      name: 'email',
      detail: 'info@veggieshack.com'
    }

  ]
  const contactContainer = document.createElement('div');
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
  name.textContent = contact['name'];
  listing.appendChild(name);

  const detail = document.createElement('p');
  detail.textContent = contact['detail'];
  listing.appendChild(detail);

  return listing;
}
