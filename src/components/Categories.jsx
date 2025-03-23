import data from '../data.json';

export default function Categories() {
  return (
    <div className='category__container'>
      {data.map((category) => {
        return (
          <div
            key={category.name}
            className={`category category--${category.name.toLowerCase()}`}
          >
            <img
              src={require(`../assets/images/icon-${category.name.toLowerCase()}.svg`)}
              alt={`${category.name} icon`}
              className='category__icon'
            />
            <p className='category__name'>{category.name}</p>
            <p className='category__score'>
              <span className='category__score--bold'>{category.score}</span> /
              100
            </p>
          </div>
        );
      })}
    </div>
  );
}
