export type DailyRevenue = {label: string; value: number}; // label: T2..CN

export type TopProduct = {name: string; sold: number};

export type WeeklyReport = {
  days: DailyRevenue[];
  orders: number;
  topProducts: TopProduct[];
};
