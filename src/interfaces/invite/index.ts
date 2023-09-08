import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface InviteInterface {
  id?: string;
  invited_by: string;
  invitee: string;
  organization_id: string;
  created_at?: any;
  updated_at?: any;

  user_invite_invited_byTouser?: UserInterface;
  user_invite_inviteeTouser?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface InviteGetQueryInterface extends GetQueryInterface {
  id?: string;
  invited_by?: string;
  invitee?: string;
  organization_id?: string;
}
