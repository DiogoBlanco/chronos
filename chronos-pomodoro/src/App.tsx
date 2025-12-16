// PascalCase
import { Heading } from './components/Heading';

import './styles/theme.css';
import './styles/global.css';

export function App() {
  return (
    <>
      {' '}
      <Heading attr={123} attr2='String'>
        OI
      </Heading>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
        adipisci fuga quo nostrum, harum, quisquam suscipit libero aspernatur
        exercitationem fugiat aliquam praesentium perspiciatis temporibus
        explicabo eos corporis! Excepturi, impedit. Cupiditate!
      </p>
    </>
  );
}
