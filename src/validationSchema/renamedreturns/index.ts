import * as yup from 'yup';

export const renamedreturnValidationSchema = yup.object().shape({
  percentage: yup.number().integer().required(),
  organization_id: yup.string().nullable().required(),
});
