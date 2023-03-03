import { useSetRecoilState } from 'recoil';
import { wishlistDisplayState } from 'state';
import style from './Wishlist.module.scss';

function Wishlist() {
  const setWishlistDisplay = useSetRecoilState(wishlistDisplayState);

  return (
    <div
      onClick={() => setWishlistDisplay(false)}
      className={`${style.wishlistContainer}`}
    >
      <div onClick={e => e.stopPropagation()} className={`${style.wishlist}`}>
        <h2>Wishlist</h2>
      </div>
    </div>
  );
}

export default Wishlist;
