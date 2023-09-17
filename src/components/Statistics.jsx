import css from './css/Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className="title">{title}</h2>}

      <ul className={css.statlist}>
        {stats.map(({ id, label, percentage }) => (
          <li style={{backgroundColor: getRandomHexColor()}} key={id} className={css.liStats}>
            <p className="label">{label}</p>
            <p className={css.percentage}>{percentage}%</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
