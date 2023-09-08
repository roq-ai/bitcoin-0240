import axios from 'axios';
import queryString from 'query-string';
import { RenamedreturnInterface, RenamedreturnGetQueryInterface } from 'interfaces/renamedreturn';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getRenamedreturns = async (
  query?: RenamedreturnGetQueryInterface,
): Promise<PaginatedInterface<RenamedreturnInterface>> => {
  const response = await axios.get('/api/renamedreturns', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createRenamedreturn = async (renamedreturn: RenamedreturnInterface) => {
  const response = await axios.post('/api/renamedreturns', renamedreturn);
  return response.data;
};

export const updateRenamedreturnById = async (id: string, renamedreturn: RenamedreturnInterface) => {
  const response = await axios.put(`/api/renamedreturns/${id}`, renamedreturn);
  return response.data;
};

export const getRenamedreturnById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/renamedreturns/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteRenamedreturnById = async (id: string) => {
  const response = await axios.delete(`/api/renamedreturns/${id}`);
  return response.data;
};
