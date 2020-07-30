import React, { useState } from 'react';

import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

import options from '../src/options';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end JavaScript framework'
  },
  {
    title: 'Why use React?',
    content: 'React is favorite JS library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
];

export default () => {
  const [ selected, setSelected ] = useState(options[0]);

  return (
    <div>
      <Accordion items={items} />
      <Search />
      <Dropdown selected={selected} onSelectedChange={setSelected} options={options} />
    </div>
  );
};
