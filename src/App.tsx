import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

function App() {
  return (
    <>
      <Heading title='Hello World'>
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quam
        cupiditate? Tenetur dolore doloribus dolores cum? Fuga iste dicta
        quidem? Eaque repellat error incidunt deleniti, est voluptatibus
        expedita atque. Non.
      </p>
    </>
  );
}

export { App };
