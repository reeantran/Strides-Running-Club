import CardTierPage from '@/components/CardTierPage';
import { uncommonCards } from '@/data/cards/uncommon';

export const metadata = { title: 'Uncommon Cards — Strides Running Club' };

export default function UncommonCardsPage() {
  return (
    <CardTierPage
      rarity="uncommon"
      heading="There are 6 uncommon cards for you to collect!"
      cards={uncommonCards}
    />
  );
}
