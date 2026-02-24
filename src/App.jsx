import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import PersonCard from './components/PersonCard';

function App() {
  const people = [
    { id: 1, name: 'Ethan Lee', role: 'IT Specialist', statusIcon: '⚙️', image: '/assets/images/ethan.jpg' },
    { id: 2, name: 'Emily Baker', role: 'Marketing Manager', statusIcon: '🎛️', image: '/assets/images/emily.jpg' },
    { id: 3, name: 'Micheal Shaun', role: 'Sales Director', statusIcon: '📈', image: '/assets/images/micheal.jpg' },
    { id: 4, name: 'Liam Carter', role: 'Product Designer', statusIcon: '🤝', image: '/assets/images/liam.jpg' },
    { id: 5, name: 'Grace Kim', role: 'Customer Lead', statusIcon: '🚀', image: '/assets/images/grace.jpg' },
    { id: 6, name: 'Noah Williams', role: 'Finance Head', statusIcon: '🎙️', image: '/assets/images/noah.jpg' },
    { id: 7, name: 'Isabella Rossi', role: 'Operations Manager', statusIcon: '📢', image: '/assets/images/isabella.jpg' },
    { id: 8, name: 'Ava Thompson', role: 'HR Executive', statusIcon: '🏮', image: '/assets/images/ava.jpg' },
  ];

  return (
    <div className="flex bg-brand-gray min-h-screen font-sans antialiased text-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-[1600px] mx-auto pb-12">
            <FilterBar />

            <div className="px-8 mt-2">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {people.map((person) => (
                  <PersonCard key={person.id} person={person} />
                ))}
              </div>

              {/* Pagination Placeholder */}
              <div className="flex items-center justify-between mt-12 py-6 border-t border-gray-100 italic text-gray-400 text-sm">
                <div className="flex items-center gap-4">
                  <span>Rows per page: 100</span>
                  <span>1-100 of 500</span>
                </div>
                <div className="flex gap-4">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">←</button>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">→</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
