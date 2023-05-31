import { HeaderFlex } from '@/components/containers/header';
import { GiTornadoDiscs } from 'react-icons/gi';

export const Header = () => {
  return (
    <HeaderFlex
      alignx="left"
      aligny="center"
      width="100vw"
      height="50px"
      padding="0 10%"
    >
      <h1 style={{ marginRight: '5px' }}>Fabiana</h1>{' '}
      <GiTornadoDiscs
        style={{ transform: 'rotate(75deg)', height: '2.5em', width: '2.5em' }}
      />
    </HeaderFlex>
  );
};
