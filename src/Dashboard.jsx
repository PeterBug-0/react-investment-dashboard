import React, { useState } from 'react';

const mockData = [
  { id: 1, name: 'Apple', amount: '$1200' },
  { id: 2, name: 'Tesla', amount: '$900' },
  { id: 3, name: 'Google', amount: '$1500' }
];

export default function Dashboard() {
  const [search, setSearch] = useState('');

  const filtered = mockData.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <h1>Investment Dashboard</h1>
      <input placeholder="Search stocks..." onChange={e => setSearch(e.target.value)} />
      <ul>
        {filtered.map(stock => (
          <li key={stock.id}>{stock.name} - {stock.amount}</li>
        ))}
      </ul>
    </div>
  );
}