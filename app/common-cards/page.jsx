import CardTierPage from '@/components/CardTierPage';
import { commonCards } from '@/data/cards/common';

export const metadata = { title: 'Common Cards — Strides Running Club' };

export default function CommonCardsPage() {
  return (
    <CardTierPage
      rarity="common"
      heading="There are 5 common cards for you to collect!"
      cards={commonCards}
    />
  );
}
