import Categories from './Categories';

export default function SummarySection() {
  return (
    <section className='summary-section'>
      <h2 className='summary-section__heading'>Summary</h2>
      <Categories />
      <button className='summary-section__button'>Continue</button>
    </section>
  );
}
