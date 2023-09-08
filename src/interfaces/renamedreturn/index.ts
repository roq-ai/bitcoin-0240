import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface RenamedreturnInterface {
  id?: string;
  percentage: number;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  organization?: OrganizationInterface;
  _count?: {};
}

export interface RenamedreturnGetQueryInterface extends GetQueryInterface {
  id?: string;
  organization_id?: string;
}
