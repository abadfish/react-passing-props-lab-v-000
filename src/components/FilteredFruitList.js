import React from 'react';

const FilteredFruitList = ({
  filter,
  fruit
}) => {

  const fruitList = !filter ? fruit : fruit.filter(i => i.fruit_type === filter);

  return (
    <ul className="fruit-list">
      {fruitList.map((fruit, index) => <li key={index}>{fruit.char}</li>)}
    </ul>
  );
};

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
};

export default FilteredFruitList;
