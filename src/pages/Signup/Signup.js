import style from './Signup.module.scss';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createUser } from 'apis/users';
import { useNavigate } from 'react-router';

function Signup() {
  const navigate = useNavigate();

  const defaultValues = {
    userName: '',
    email: '',
    password: '',
    confirm_password: '',
  };

  const authSchema = yup.object({
    userName: yup
      .string()
      .required("Un nom d'utilisateur doit être renseigné")
      .min(8, "Nom d'utilisateur trop court")
      .max(20, "Nom d'utilisateur trop long"),
    email: yup.string().required('Un email doit être renseigné'),
    password: yup
      .string()
      .required('Veuillez entrer un mot de passe')
      .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .matches(/[^\w]/, 'Password requires a symbol'),

    confirm_password: yup
      .string()
      .required('Veuillez confirmer votre mot de passe')
      .oneOf(
        [yup.ref('password'), null],
        'Les mots de passe doivent être identiques'
      ),
  });

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    setError,
    clearErrors,
  } = useForm({
    defaultValues,
    resolver: yupResolver(authSchema),
  });

  const submit = handleSubmit(async user => {
    try {
      clearErrors();
      await createUser(user);
      navigate('/connexion/login');
    } catch (message) {
      setError('generic', { type: 'generic', message });
    }
  });

  return (
    <>
      <h1>Register</h1>
      <form
        onSubmit={handleSubmit(submit)}
        className={`${style.formContainer}`}
      >
        <div className={`${style.champContainer}`}>
          <label>Nom d'utilisateur</label>
          <input {...register('userName')} type="text" />
          {errors.userName && <p>{errors.userName.message} </p>}
        </div>

        <div className={`${style.champContainer}`}>
          <label>Adresse mail</label>
          <input {...register('email')} type="email" />
          {errors.email && <p>{errors.email.message} </p>}
        </div>

        <div className={`${style.champContainer}`}>
          <label>Mot de passe</label>
          <input {...register('password')} type="password" />
          {errors.password && <p>{errors.password.message} </p>}
        </div>

        <div className={`${style.champContainer}`}>
          <label>Confirmez le mot de passe</label>
          <input {...register('confirm_password')} type="password" />
          {errors.confirm_password && <p>{errors.confirm_password.message} </p>}
        </div>

        <button
          disabled={isSubmitting}
          className={`btn btn-primary ${style.submitBtn}`}
        >
          Inscription
        </button>
      </form>
    </>
  );
}

export default Signup;
