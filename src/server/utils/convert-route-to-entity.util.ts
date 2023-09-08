const mapping: Record<string, string> = {
  accounts: 'account',
  deposits: 'deposit',
  invites: 'invite',
  organizations: 'organization',
  renamedreturns: 'Renamedreturn',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
