import Image from 'next/image';
import { SectionFlex } from '@/components/containers/section/index';
import { FigureFlex } from '@/components/containers/figure';
import picture from '../../../../public/imgens/background.png';

export default function Home() {
  return (
    <SectionFlex
      direction="row"
      width="100%"
      height="100%"
      alignx="space-around"
      aligny="center"
      wrap="wrap"
    >
      <section
        style={{
          width: '40%',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          minWidth: '300px'
        }}
      >
        <h1>Fabiana Furacão</h1>
        <p>Social no coração</p>
      </section>
      <FigureFlex height="100%" position="relative" width="60%">
        <Image
          src={picture}
          alt="enfermeira seurando um globo terrestre"
          fill
          quality={100}
          style={{ objectFit: 'contain' }}
        />
      </FigureFlex>
    </SectionFlex>
  );
}
