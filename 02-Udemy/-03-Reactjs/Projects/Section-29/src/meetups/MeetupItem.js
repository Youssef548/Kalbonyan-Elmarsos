import { useContext } from 'react';

import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoriteContext from '../store/fovorites-context';

const MeetupItem = (props) => {
  const favoritesCtx = useContext(FavoriteContext);

  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'remove from favorites' : 'to favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
