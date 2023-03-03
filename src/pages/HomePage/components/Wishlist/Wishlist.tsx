import { useSetRecoilState } from 'recoil';
import { wishlistDisplayState } from 'state';
import style from './Wishlist.module.scss';

function Wishlist() {
  const setWishlistDisplay = useSetRecoilState(wishlistDisplayState);
  // const logements = useRecoilValue(selectWishedLogement);

  return (
    <div
      onClick={() => setWishlistDisplay(false)}
      className={`${style.wishlistContainer}`}
    >
      <div onClick={e => e.stopPropagation()} className={`${style.wishlist}`}>
        <h4 className="mn-20">Wishlist</h4>
        {/* <ul>
          {logements.length &&
            logements.map(l => (
              <li key={l._id} className="d-flex align-items-center">
                <span className="flex-fill mr-15">{l.title}</span>
                <button className="btn, btn-denger">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </li>
            ))}
        </ul> */}
      </div>
    </div>
  );
}

export default Wishlist;
