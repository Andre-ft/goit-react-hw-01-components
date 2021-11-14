import PropTypes from 'prop-types';
import s from './Statistics.module.css';
import getColor from './getColor';

function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statList}>
        {stats.map((elem, i, array) => {
          // const color = getColor();
          return (
            <li
              className={s.item}
              key={elem.id}
              style={{
                // backgroundColor: `rgb(${color})`,
                backgroundColor: `${getColor()}`,
                width: 100 / array.length + '%',
              }}
            >
              <span className={s.label}>{elem.label}</span>
              <span className={s.percentage}>{elem.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

export default Statistics;
