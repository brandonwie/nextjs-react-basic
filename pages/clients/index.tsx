import Link from 'next/link';
import React from 'react';

const ClientsPage: React.FC = (): JSX.Element => {
  const clients = [
    { id: 'brandon', name: 'Brandon Wie' },
    { id: 'manu', name: 'Manuel' },
  ];

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => {
          return (
            <li key={client.id}>
              <Link
                href={{
                  pathname: '/clients/[id]',
                  query: { id: client.id },
                }}
              >
                {client.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ClientsPage;
