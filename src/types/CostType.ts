export type costWithoutIdType = {
  date: Date;
  description: string;
  amount: number;
};

type Id = { id: string };

export type costType = Id & costWithoutIdType;
