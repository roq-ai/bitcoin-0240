import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface DepositInterface {
  id?: string;
  amount: number;
  currency: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface DepositGetQueryInterface extends GetQueryInterface {
  id?: string;
  currency?: string;
  organization_id?: string;
}
