import * as yup from 'yup';

export const inviteValidationSchema = yup.object().shape({
  invited_by: yup.string().nullable().required(),
  invitee: yup.string().nullable().required(),
  organization_id: yup.string().nullable().required(),
});
