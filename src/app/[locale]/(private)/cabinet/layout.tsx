import { ReactNode } from 'react';
import { EnumRoles } from 'types/enums';

import { Container } from 'ui/components/Container';
import { Header } from 'components/header';
import { ProfileSidebar } from './components/ProfileSidebar';

import { buyerConfig } from './sidebar-configs/buyer-config';
import JaneCooperImg from 'assets/images/sellers/JaneCooper.png';

import s from './Cabinet.module.scss';
import { IUser } from 'types/userTypes';

export interface ISidebarConfig {
  items: {
    icon: ReactNode;
    title: string;
    href: string;
  }[];
  footerContent?: ReactNode;
}

interface PrivateLayoutProps {
  children: React.ReactNode;
}

export default async function PrivateLayout({ children }: PrivateLayoutProps) {

  let currentConfig: ISidebarConfig = buyerConfig;
  const user: IUser = {
    avatarURL: JaneCooperImg,
    email: 'jane@gmail.com',
    level: 10,
    role: EnumRoles.BUYER,
    userName: 'Jane Cooper',
    achievements: [''],
    address: { city: '', phoneNumber: '', street: '', zipCode: '' },
    backgroundColor: '',
    backgroundImage: '',
    banned: false,
    bonuses: 1,
    confidentLvl: 1,
    emailConfirmDate: '',
    experience: 1,
    id: '',
    isTwoFactorEnabled: false,
    qrCode: '',
    ratingsStats: { entries: [{ key: '', value: '' }] },
    stripeId: '',
    subscribed: false,
  };

  return (
    <>
      <Header />
      <main className={s.profile}>
        <Container>
          <div className={s.profile_wrapper}>
            <ProfileSidebar config={currentConfig} user={user} />
            {children}
          </div>
        </Container>
      </main>
    </>
  );
}
