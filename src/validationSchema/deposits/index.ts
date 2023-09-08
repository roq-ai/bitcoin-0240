import * as yup from 'yup';

export const depositValidationSchema = yup.object().shape({
  amount: yup.number().integer().required(),
  currency: yup.string().required(),
  organization_id: yup.string().nullable().required(),
});
