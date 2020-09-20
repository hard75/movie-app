import * as Yup from 'yup';

const requiredMsg = 'Field Required';

const RegisterSchema = Yup.object().shape({
    name: Yup.string(),
    nickname: Yup.string().
    required(requiredMsg),
    email: Yup.string()
    .required(requiredMsg)
    .email('Email invalid'),
    password: Yup.string()
    .min(6, 'Too Short')
    .required(requiredMsg),
    password_confirmation: Yup.string()
    .min(6, 'Too Short')
    .required(requiredMsg)
});

export default RegisterSchema;