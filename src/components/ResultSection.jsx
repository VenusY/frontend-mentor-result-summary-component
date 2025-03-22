import '../styles/scss/ResultSection.scss';
import Score from './Score';
import Description from './Description';

export default function ResultSection() {
  return (
    <section className='result-section'>
      <h2 className='result-section__heading'>Your Result</h2>
      <Score />
      <Description />
    </section>
  );
}
