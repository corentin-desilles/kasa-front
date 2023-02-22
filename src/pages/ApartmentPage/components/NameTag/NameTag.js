import style from './NameTag.module.scss';

function NameTag({ tag }) {
  return <div className={`${style.tagStyle}`}>{tag}</div>;
}

export default NameTag;
