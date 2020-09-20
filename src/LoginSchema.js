import * as Yup from 'yup';

const requiredMsg = 'Field Required';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
    .required(requiredMsg)
    .email('Email invalid'),
    password: Yup.string()
    .required(requiredMsg)
});

export default LoginSchema;