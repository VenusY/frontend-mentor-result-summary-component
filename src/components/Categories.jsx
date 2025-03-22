import data from '../data.json';

export default function Categories() {
  return (
    <>
      {data.map((category) => {
        return (
          <div key={category.name} className='category'>
            <img
              src={require(`../assets/images/icon-${category.name.toLowerCase()}.svg`)}
              alt={`${category.name} icon`}
              className='category__icon'
            />
            <p className='category__name'>{category.name}</p>
            <p className='category__score'>{category.score}</p>
          </div>
        );
      })}
    </>
  );
}
