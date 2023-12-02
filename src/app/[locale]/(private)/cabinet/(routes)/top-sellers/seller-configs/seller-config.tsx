import { ISellersConfig } from '../page';

import CodyImg from 'assets/images/sellers/Kristin.png';
import FloydImg from 'assets/images/sellers/Ralph.png';
import KathrynImg from 'assets/images/sellers/Wade.png';
import JacobImg from 'assets/images/sellers/Jacob.png';
import JennyImg from 'assets/images/sellers/Jenny.png';
import CameronImg from 'assets/images/sellers/Cameron.png';
import DarleneImg from 'assets/images/sellers/Darlene.png';
import EleanorImg from 'assets/images/sellers/Eleanor.png';
import EstherImg from 'assets/images/sellers/Esther.png';
import RalphEdImg from 'assets/images/sellers/RalphEd.png';

export const sellersConfig: ISellersConfig = {
  sellers: [
    {
      id: '1',
      avatarURL: KathrynImg,
      email: 'smallpaul@me.com',
      userName: 'Kathryn Murphy',
      number: '(702) 555-0122',
      signupDate: '31/05/20, 14:20',
      sells: [25, 4400],
    },
    {
      id: '2',
      avatarURL: FloydImg,
      email: 'mccurley@yahoo.ca',
      userName: 'Floyd Miles',
      number: '(205) 555-0100',
      signupDate: '05/06/20, 11:30',
      sells: [36, 360],
    },
    {
      id: '3',
      avatarURL: JacobImg,
      email: 'pkplex@optonline.net',
      userName: 'Jacob Jones',
      number: '(303) 555-0105',
      signupDate: '02/06/20, 14:30',
      sells: [10, 250],
    },
    {
      id: '4',
      avatarURL: DarleneImg,
      email: 'bradl@comcast.net',
      userName: 'Darlene Robertson',
      number: '(270) 555-0117',
      signupDate: '02/06/20, 14:30',
      sells: [47, 471],
    },
    {
      id: '5',
      avatarURL: CodyImg,
      email: 'elflord@mac.com',
      userName: 'Cody Fisher',
      number: '(219) 555-0114',
      signupDate: '31/05/20, 14:20',
      sells: [36, 6900],
    },
    {
      id: '6',
      avatarURL: JennyImg,
      email: 'jginspace@mac.com',
      userName: 'Jenny Wilson',
      number: '(319) 555-0115',
      signupDate: '03/06/20, 15:00',
      sells: [17, 360],
    },
    {
      id: '7',
      avatarURL: CameronImg,
      email: 'crusader@yahoo.com',
      userName: 'Cameron Williamson',
      number: '(319) 555-0115',
      signupDate: '02/06/20, 14:30',
      sells: [360, 1850],
    },
    {
      id: '8',
      avatarURL: EstherImg,
      email: 'mfburgo@live.com',
      userName: 'Esther Howard',
      number: '(252) 555-0126',
      signupDate: '01/06/20, 09:30',
      sells: [8, 74],
    },
    {
      id: '9',
      avatarURL: RalphEdImg,
      email: 'plover@aol.com',
      userName: 'Ralph Edwards',
      number: '(406) 555-0120',
      signupDate: '03/06/20, 15:00',
      sells: [23, 50],
    },
    {
      id: '10',
      avatarURL: EleanorImg,
      email: 'amichalo@msn.com',
      userName: 'Eleanor Pena',
      number: '(209) 555-0104',
      signupDate: '02/06/20, 14:30',
      sells: [158, 5000],
    },
  ],
};
