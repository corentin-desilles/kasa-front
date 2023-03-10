import style from './Login.module.scss';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthContext } from 'context/AuthContext';
import { useContext } from 'react';
import { Navigate } from 'react-router';

function Login() {
  const { login, user } = useContext(AuthContext);

  const authSchema = yup.object({
    email: yup.string().required('Un email doit être renseigné'),
    password: yup
      .string()
      .required('Veuillez entrer un mot de passe')
      .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
      .matches(/[0-9]/, 'Password requires a number')
      .matches(/[a-z]/, 'Password requires a lowercase letter')
      .matches(/[A-Z]/, 'Password requires an uppercase letter')
      .matches(/[^\w]/, 'Password requires a symbol'),
  });

  const defaultValues = {
    email: '',
    password: '',
  };

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

  const submit = handleSubmit(async credentials => {
    try {
      clearErrors();
      await login(credentials);
    } catch (message) {
      setError('generic', { type: 'generic', message });
    }
  });

  return (
    <>
      {user ? (
        <Navigate to="/profil" />
      ) : (
        <>
          <h1>Login</h1>
          <form onSubmit={submit} className={`${style.formContainer}`}>
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

            <button
              disabled={isSubmitting}
              className={`btn btn-primary ${style.submitBtn}`}
            >
              Connexion
            </button>
          </form>
        </>
      )}
    </>
  );
}

export default Login;
