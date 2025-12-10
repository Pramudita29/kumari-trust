import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Tailwind imported here
import './styles/global.css'; // ← MUST BE HERE

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
