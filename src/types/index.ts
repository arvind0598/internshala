export type StipendData = {
  amount: number;
  maxAmount?: number;
  type: 'WEEKLY' | 'MONTHLY' | 'LUMPSUM' | 'UNPAID' | 'OTHER';
  isPerformanceBased: boolean;
  hasIncentives: boolean;
};

export type InternshipData = {
  name: string;
  startup: string;
  stipend: StipendData;
  duration: number;
  content: Node;
};
