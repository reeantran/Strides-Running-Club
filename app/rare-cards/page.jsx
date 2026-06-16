import CardTierPage from '@/components/CardTierPage';
import { rareCards } from '@/data/cards/rare';

export const metadata = { title: 'Rare Cards — Strides Running Club' };

export default function RareCardsPage() {
  return (
    <CardTierPage
      rarity="rare"
      heading="There are 9 rare cards for you to collect!"
      cards={rareCards}
    />
  );
}
