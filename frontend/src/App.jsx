import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register.jsx';
import ProductList from './components/ProductList.jsx';
import OrderForm from './components/OrderForm.jsx';
import Login from './components/Login.jsx';
import Dashboard from './components/Dashboard.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <header className="bg-blue-500 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-white text-2xl">POS Web Application</h1>
          </div>
        </header>
        <div className="flex flex-1 overflow-hidden">
          <nav className="bg-gray-800 w-64 p-4 flex-shrink-0">
            <ul className="space-y-4">
              <li>
                <Link to="/register" className="text-white block">Register</Link>
              </li>
              <li>
                <Link to="/products" className="text-white block">Products</Link>
              </li>
              <li>
                <Link to="/orders" className="text-white block">Orders</Link>
              </li>
              <li>
                <Link to="/login" className="text-white block">Login</Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-white block">Dashboard</Link>
              </li>
            </ul>
          </nav>
          <main className="flex-1 p-4 overflow-auto">
            <Routes>
              <Route path="/register" element={<Register />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/orders" element={<OrderForm />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
        <footer className="bg-blue-500 p-4 text-center text-white">
          <div className="container mx-auto">
            &copy; 2023 POS Web Application. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
