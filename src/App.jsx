import './styles/reset.css';
import './styles/scss/App.scss';
import ResultSection from './components/ResultSection.jsx';
import SummarySection from './components/SummarySection.jsx';

export default function App() {
  return (
    <div className='card'>
      <ResultSection />
      <SummarySection />
    </div>
  );
}
