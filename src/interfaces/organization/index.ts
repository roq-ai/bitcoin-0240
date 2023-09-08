import { AccountInterface } from 'interfaces/account';
import { DepositInterface } from 'interfaces/deposit';
import { InviteInterface } from 'interfaces/invite';
import { RenamedreturnInterface } from 'interfaces/renamedreturn';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  account?: AccountInterface[];
  deposit?: DepositInterface[];
  invite?: InviteInterface[];
  Renamedreturn?: RenamedreturnInterface[];
  user?: UserInterface;
  _count?: {
    account?: number;
    deposit?: number;
    invite?: number;
    Renamedreturn?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
