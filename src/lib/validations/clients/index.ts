import * as yup from 'yup';

 export const clientSchema = yup.object().shape({
    code: yup.string().required("Fiel Required"),
    name: yup.string().required("Fiel Required"),
    subdomain: yup.string().required("Fiel Required"),
  });