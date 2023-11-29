import { ROUTES } from 'constants/routes';
import { ISidebarConfig } from '../layout';

import { KeyIcon } from 'components/icons/KeyIcon';
import { TransparentAchiveIcon } from 'components/icons/AchiveIcon';
import { CartIcon } from 'components/icons/CartIcon';
import { FlagIcon } from 'components/icons/FlagIcon';
import { PaymentIcon } from 'components/icons/PaymentIcon';
import { ExitIcon } from 'components/icons/ExitIcon';
import { MessageIcon } from 'components/icons/MessageIcon';
import { StoreIcon } from 'components/icons/StoreIcon';
import { TotalsSmallIcon } from 'components/icons/TotalsIcon';
import { DashboardIcon } from 'components/icons/DashboardIcon';

export const buyerConfig: ISidebarConfig = {
  items: [
    {
      icon: <DashboardIcon/>,
      title: 'dashboard',
      href: ROUTES.PRIVATE.DASHBOARD,
    },
    { icon: <MessageIcon />, title: 'messages', href: ROUTES.PRIVATE.MESSAGES },
    {
      icon: <TotalsSmallIcon />,
      title: 'sections',
      href: ROUTES.PRIVATE.SECTIONS,
    },
    {
      icon: <StoreIcon />,
      title: 'sellers',
      href: ROUTES.PRIVATE.SELLER.TOP_SELLERS,
    },
    {
      icon: <CartIcon />,
      title: 'buyers',
      href: ROUTES.PRIVATE.BUYERS,
    },
    {
      icon: <PaymentIcon />,
      title: 'financial',
      href: ROUTES.PRIVATE.SELLER.FINANCIAL_BALANCE,
    },
    {
      icon: <TransparentAchiveIcon />,
      title: 'achievement',
      href: ROUTES.PRIVATE.ACHIEVEMENT,
    },
    { icon: <KeyIcon />, title: 'security', href: ROUTES.PRIVATE.SECURITY },
    {
      icon: <FlagIcon />,
      title: 'report',
      href: ROUTES.PRIVATE.REPORT,
    },
    { icon: <ExitIcon />, title: 'logout', href: ROUTES.AUTH.LOGOUT },
  ],
};
