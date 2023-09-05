import AppDrawer from './AppDrawer';
import './AppDrawer.css';

const menuItems = ['About', 'Get Started', 'Sign In'];
function App() {
  return (
    <div className="container">
      <AppDrawer menuItems={menuItems} />
    </div>
  );
}

export default App;
