import Sidebar from './components/Sidebar';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import PersonCard from './components/PersonCard';
import { HiChevronLeft, HiChevronRight, HiChevronDown } from "react-icons/hi";

function App() {
  const people = [
    { id: 1, name: 'Ethan Lee', role: 'IT Specialist', roleColor: '#947550', statusIcon: '/assets/icons/setting.png', image: '/assets/images/ethan.png' },
    { id: 2, name: 'Emily Baker', role: 'Marketing Manager', roleColor: '#947550', statusIcon: '/assets/icons/marketing.png', image: '/assets/images/emily.png' },
    { id: 3, name: 'Micheal Shaun', role: 'Sales Director', roleColor: '#947550', statusIcon: '/assets/icons/sales.png', image: '/assets/images/micheal.png' },
    { id: 4, name: 'Liam Carter', role: 'Product Designer', roleColor: '#947550', statusIcon: '/assets/icons/design.png', image: '/assets/images/liam.png' },
    { id: 5, name: 'Grace Kim', role: 'Customer Lead', roleColor: '#947550', statusIcon: '/assets/icons/customer.png', image: '/assets/images/grace.png' },
    { id: 6, name: 'Noah Williams', role: 'Finance Head', roleColor: '##947550', statusIcon: '/assets/icons/finance.png', image: '/assets/images/noah.png' },
    { id: 7, name: 'Isabella Rossi', role: 'Operations Manager', roleColor: '#947550', statusIcon: '/assets/icons/ops.png', image: '/assets/images/isabella.png' },
    { id: 8, name: 'Ava Thompson', role: 'HR Executive', roleColor: '#947550', statusIcon: '/assets/icons/hr.png', image: '/assets/images/ava.png' },
    { id: 9, name: 'Ethan Lee', role: 'IT Specialist', roleColor: '#947550', statusIcon: '/assets/icons/setting.png', image: '/assets/images/ethan.png' },
    { id: 10, name: 'Emily Baker', role: 'Marketing Manager', roleColor: '#947550', statusIcon: '/assets/icons/marketing.png', image: '/assets/images/emily.png' },
    { id: 11, name: 'Micheal Shaun', role: 'Sales Director', roleColor: '#947550', statusIcon: '/assets/icons/sales.png', image: '/assets/images/micheal.png' },
    { id: 12, name: 'Liam Carter', role: 'Product Designer', roleColor: '#947550', statusIcon: '/assets/icons/design.png', image: '/assets/images/liam.png' },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-brand-gray font-sans antialiased text-gray-900">
      <div className="h-screen overflow-y-auto flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
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

              {/* Pagination Section */}

              <div className="flex items-center justify-start gap-10 mt-16 py-8 border-t border-gray-100 font-medium text-gray-800">
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-normal text-gray-500">Rows per page:</span>
                    <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl cursor-pointer hover:bg-gray-50 transition-all shadow-sm">
                      <span className="text-sm">100</span>
                      <HiChevronDown className="text-gray-400" />
                    </div>
                  </div>

                  <span className="text-sm font-normal text-gray-500">1-100 of 500</span>
                </div>

                <div className="flex items-center gap-6">
                  <button className="p-2 text-gray-400 hover:text-brand-dark transition-colors">
                    <HiChevronLeft className="text-2xl" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-brand-dark transition-colors">
                    <HiChevronRight className="text-2xl" />
                  </button>
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
