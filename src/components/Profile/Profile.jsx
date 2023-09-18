import css from './Profile.module.css'

export const Profile = ({username, tag, location, avatar, stats:{followers, views, likes}}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt={username}
          className={css.avatar}
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <p className="label">Followers</p>
          <p className="quantity">{followers}</p>
        </li>
        <li>
          <p className="label">Views</p>
          <p className="quantity">{views}</p>
        </li>
        <li>
          <p className="label">Likes</p>
          <p className="quantity">{likes}</p>
        </li>
      </ul>
    </div>
  );
};
