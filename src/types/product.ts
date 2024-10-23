export type TPaymentMethod = 'pix' | 'card' | 'boleto' | 'cash' | 'deposit';

export type TProduct = {
  id: string;
  name: string;
  description: string;
  is_new: boolean;
  price: number;
  accept_trade: boolean;
  user_id: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};
