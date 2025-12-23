import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Sponsors from './pages/Sponsors';
import Events from './pages/Events';

// Placeholder for other pages to be implemented
const Placeholder = ({ title }) => (
  <div className="pt-32 min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-text-muted">Under Construction via Antigravity</p>
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Placeholder title="About" />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/summit" element={<Placeholder title="Main Summit" />} />
          <Route path="/events/hack" element={<Placeholder title="Builder Hack" />} />
          <Route path="/events/dealflow" element={<Placeholder title="Dealflow Den" />} />
          <Route path="/events/blockdown" element={<Placeholder title="Blockdown Night" />} />
          <Route path="/events/workshops" element={<Placeholder title="Workshops" />} />
          <Route path="/agenda" element={<Placeholder title="Agenda" />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/partners" element={<Placeholder title="Partners" />} />
          <Route path="/apply/*" element={<Placeholder title="Apply" />} />
          <Route path="/gallery" element={<Placeholder title="Gallery" />} />
          <Route path="/tickets" element={<Placeholder title="Tickets" />} />
          <Route path="/contact" element={<Placeholder title="Contact" />} />
          <Route path="/brand" element={<Placeholder title="Brand Kit" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
