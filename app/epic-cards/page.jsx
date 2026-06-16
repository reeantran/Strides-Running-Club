import CardTierPage from '@/components/CardTierPage';
import { epicCards } from '@/data/cards/epic';

export const metadata = { title: 'Epic Cards — Strides Running Club' };

export default function EpicCardsPage() {
  return (
    <CardTierPage
      rarity="epic"
      heading="There are 6 epic cards for you to collect!"
      cards={epicCards}
    />
  );
}
