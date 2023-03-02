import style from './LogementForm.module.scss';
import * as yup from 'yup';
import { useForm, useFieldArray } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addLogement, updateLogement } from '../../../../apis';
import { useLoaderData, useNavigate } from 'react-router';

function LogementForm() {
  const targetedLogement = useLoaderData();
  const navigate = useNavigate();

  const defaultValues = {
    title: targetedLogement ? targetedLogement.title : '',
    cover: targetedLogement ? targetedLogement.cover : '',
    location: targetedLogement ? targetedLogement.location : '',
    tags: targetedLogement ? targetedLogement.tags : [''],
    pictures: targetedLogement ? targetedLogement.pictures : [''],
    description: targetedLogement ? targetedLogement.description : '',
    equipment: targetedLogement ? targetedLogement.equipment : [''],
    host: {
      name: targetedLogement ? targetedLogement.host.name : '',
      picture: targetedLogement ? targetedLogement.host.picture : '',
    },
    rating: '',
  };

  const logementSchema = yup.object({
    title: yup.string().required('Un nom de logement doit être renseigné'),
    location: yup.string().required('Une localisation doit être renseigné'),
    // image: yup
    //   .string()
    //   .required('Au moins une image doit être ajouté')
    //   .url("L'image doit être un lien valide"),
  });

  const {
    formState: { isSubmitting },
    register,
    control,
    handleSubmit,
    reset,
    clearErrors,
    setError,
  } = useForm({
    defaultValues,
    resolver: yupResolver(logementSchema),
  });

  const {
    fields: tagFields,
    append: tagAppend,
    remove: tagRemove,
  } = useFieldArray({
    control,
    name: 'tags',
  });
  const {
    fields: pictureFields,
    append: pictureAppend,
    remove: pictureRemove,
  } = useFieldArray({
    control,
    name: 'pictures',
  });
  const {
    fields: equipmentsFields,
    append: equipmentsAppend,
    remove: equipmentsRemove,
  } = useFieldArray({
    control,
    name: 'equipment',
  });

  async function submit(values) {
    console.log(values);
    try {
      clearErrors();
      if (targetedLogement) {
        await updateLogement({
          ...values,
          _id: targetedLogement._id,
        });
        navigate('/admin/logements/liste');
      } else {
        await addLogement(values);
        reset(defaultValues);
      }
    } catch (e) {
      setError('generic', { type: 'generic', message: 'Il y a eu une erreur' });
    }
  }

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className={`d-flex flex-column card p-20 ${style.logementForm}`}
    >
      <h2 className="mb-20">Ajouter un logement</h2>
      <div className="d-flex flex-column mb-20">
        <label>Nom du logement</label>
        <input {...register('title')} type="text" />
      </div>
      <div className="d-flex flex-column mb-20">
        <label>Image de couverture</label>
        <input {...register('cover')} type="text" />
      </div>
      <div className="d-flex flex-column mb-20">
        <label>Localisation du logement</label>
        <input {...register('location')} type="text" />
      </div>
      <div className="d-flex flex-column mb-20">
        <label>Nom de l'hôte</label>
        <input {...register('host.name')} type="text" />
      </div>
      <div className="d-flex flex-column mb-20">
        <label>photo de l'hôte</label>
        <input {...register('host.picture')} type="text" />
      </div>

      {/* fieldarray */}
      <div className="d-flex flex-column mb-20">
        tags
        {tagFields.map(({ id }, index) => {
          return (
            <div key={id}>
              <label>tag</label>
              <input {...register(`tags.${index}`)} type="text" />
              <button type="button" onClick={() => tagRemove(index)}>
                Remove
              </button>
            </div>
          );
        })}
        <button type="button" onClick={() => tagAppend({})}>
          Append
        </button>
      </div>

      <div className="d-flex flex-column mb-20">
        Photos du logement
        {pictureFields.map(({ id }, index) => {
          return (
            <div key={id}>
              <label>pictures</label>
              <input {...register(`pictures.${index}`)} type="text" />
              <button type="button" onClick={() => pictureRemove(index)}>
                Remove
              </button>
            </div>
          );
        })}
        <button type="button" onClick={() => pictureAppend({})}>
          Append
        </button>
      </div>

      <div className="d-flex flex-column mb-20">
        equipment
        {equipmentsFields.map(({ id }, index) => {
          return (
            <div key={id}>
              <label>equipment</label>
              <input {...register(`equipment.${index}`)} type="text" />
              <button type="button" onClick={() => equipmentsRemove(index)}>
                Remove
              </button>
            </div>
          );
        })}
        <button type="button" onClick={() => equipmentsAppend({})}>
          Append
        </button>
      </div>

      <div className="d-flex flex-column mb-20">
        <label>Description</label>
        <input {...register('description')} type="text" />
      </div>
      <button disabled={isSubmitting} className={`btn btn-primary`}>
        Valider
      </button>
    </form>
  );
}

export default LogementForm;
