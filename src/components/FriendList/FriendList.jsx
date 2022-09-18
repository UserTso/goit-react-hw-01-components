import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
    return (
        <ul className={css.friendList}>{
            friends.map(({id, avatar, name, isOnline}) => {
                return (
                    <li key={id} className={css.item}>
  <span className={css.status}></span>
  <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
  <p className={css.name}>{name}</p>
</li>
                )
            })
        }
  
</ul>
    )
}

FriendList.prototypes = {
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,

};