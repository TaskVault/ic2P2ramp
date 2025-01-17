import { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import '@rainbow-me/rainbowkit/styles.css';

import logo from './assets/p2ploan.webp';
import CreateOrder from './components/CreateOrder';
import ViewOrders from './components/ViewOrders';

// JSON viewer component
import 'react-json-view-lite/dist/index.css';

function App() {
    const [loading, setLoading] = useState(false);
    const [currentTab, setCurrentTab] = useState<'create' | 'view'>('create');

    return (
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white p-4 shadow-md flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} className="rounded-full h-12 w-12 mr-2" alt="zk2ramp logo" />
                    <h1 className="text-xl font-bold">zk2ramp</h1>
                </div>
                <ConnectButton />
            </nav>

            <div className="flex flex-col items-center mt-8">
                <div className="flex justify-center mb-4">
                    <button
                        onClick={() => setCurrentTab('create')}
                        className={`px-4 py-2 mx-2 rounded ${currentTab === 'create' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                    >
                        Create Order
                    </button>
                    <button
                        onClick={() => setCurrentTab('view')}
                        className={`px-4 py-2 mx-2 rounded ${currentTab === 'view' ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
                    >
                        View Orders
                    </button>
                </div>
                <div className="bg-white p-4 rounded shadow-md text-center w-full sm:w-3/4 md:w-1/2 lg:w-1/3" style={{ opacity: loading ? 0.5 : 1 }}>
                    {currentTab === 'create' && <CreateOrder />}
                    {currentTab === 'view' && <ViewOrders />}
                </div>
            </div>
        </div>
    );
}

export default App;
