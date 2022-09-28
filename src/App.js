import './App.css';
import axios from 'axios'

// Components
import CreateForm from './components/create-form'
import List from './components/create-form/List/List';

// Routing
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

function App() {
  return (
    <Router>
      <div className="col-md-6 m-auto p-4">
        <Routes>
          <Route exact path="/" element={<List />} />
          <Route exact path="/create" element={<CreateForm />} />
          <Route exact path="/edit/:id" element={<CreateForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
