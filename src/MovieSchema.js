import * as Yup from 'yup';

const requiredMsg = 'Field Required';

const MovieSchema = Yup.object().shape({
    title: Yup.string()
    .required(requiredMsg),
    description: Yup.string()
    .required(requiredMsg),
    year: Yup.number()
    .max(new Date().getFullYear() + 1, 'Year invalid')
    .required(requiredMsg)
});

export default MovieSchema;