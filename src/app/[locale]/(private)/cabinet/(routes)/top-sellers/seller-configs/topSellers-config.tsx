import { ITopSellersConfig } from "../page";

import KristinImg from 'assets/images/sellers/Kristin.png';
import TheresaImg from 'assets/images/sellers/Theresa.png';
import GuyImg from 'assets/images/sellers/Guy.png';
import RalphImg from 'assets/images/sellers/Ralph.png';
import WadeImg from 'assets/images/sellers/Wade.png';


export const topSellersConfig: ITopSellersConfig = {
  sellers: [
    {
      userName: 'Kristin Watson',
      avatarURL: KristinImg,
      achievements: ['1', '2,140'],
    },
    {
      userName: 'Theresa Webb',
      avatarURL: TheresaImg,
      achievements: ['2', '2,140'],
    },
    {
      userName: 'Guy Hawkins',
      avatarURL: GuyImg,
      achievements: ['3', '2,140'],
    },
    {
      userName: 'Ralph Edwards',
      avatarURL: RalphImg,
      achievements: ['4', '2,140'],
    },
    {
      userName: 'Wade Warren',
      avatarURL: WadeImg,
      achievements: ['5', '2,140'],
    },
  ],
};
