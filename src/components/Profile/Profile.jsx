import PropTypes from 'prop-types';
import css from './Profile.module.css';

export default function UserProfile({username, tag, location, avatar, stats: {followers, views, likes}}) {
  
    return (
        <div className={css.profile}>
<div className={css.description}>
  <img
    src={avatar}
    alt={tag}
    className={css.avatar}
    width={100} 
  />
  <p className={css.name}><b>{username}</b></p>
  <p className={css.tag}>{tag}</p>
  <p className={css.location}>{location}</p>
</div>
<ul className={css.stats}>
    <li className={css.item}>
      <span className={css.label}>Followers</span>
      <span className={css.quantity}><b>{followers}</b></span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Views</span>
      <span className={css.quantity}><b>{views}</b></span>
    </li>
    <li className={css.item}>
      <span className={css.label}>Likes</span>
      <span className={css.quantity}><b>{likes}</b></span>
    </li>
  </ul>
</div>
);
}

UserProfile.prototypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
}


