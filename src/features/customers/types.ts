export type CustomerTier = 'gold' | 'silver' | 'regular';

export type Customer = {
  id: string;
  name: string;
  phone: string;
  tier: CustomerTier;
  totalSpent: number; // VND
};
