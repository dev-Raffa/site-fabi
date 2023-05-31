import Image from 'next/image';
import { SectionFlex } from '@/components/containers/section/index';
import picture from '../../../../public/imgens/background.png';

export default function Home() {
  return (
    <SectionFlex direction="row">
      <Image
        src={picture}
        alt="enfermeira seurando um globo terrestre"
        height={500}
        width={500}
      />
    </SectionFlex>
  );
}
