import style from './NameTag.module.scss';

function NameTag({ tag }: { tag: [string] }) {
  return <div className={`${style.tagStyle}`}>{tag}</div>;
}

export default NameTag;
