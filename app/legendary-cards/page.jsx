import CardTierPage from '@/components/CardTierPage';
import { legendaryCards } from '@/data/cards/legendary';

export const metadata = { title: 'Legendary Cards — Strides Running Club' };

export default function LegendaryCardsPage() {
  return (
    <CardTierPage
      rarity="legendary"
      heading="There are 6 legendary cards for you to collect!"
      cards={legendaryCards}
    />
  );
}
