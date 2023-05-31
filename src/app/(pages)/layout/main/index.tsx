import { MainFlex } from '@/components/containers/main';
import { ReactNode } from 'react';

export const Main = ({ children }: { children: ReactNode }) => {
  return (
    <MainFlex
      width="100vw"
      height="calc(100vh - 50px)"
      alignx="center"
      aligny="center"
      padding="0 10%"
    >
      {children}
    </MainFlex>
  );
};
