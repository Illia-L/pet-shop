import css from './Icon.module.css';

function Icon({ id, width, height, iconClass = '' }) {
  return (
    <svg
      className={`${css.icon} ${iconClass}`}
      width={width}
      height={height}
      preserveAspectRatio='xMidYMid meet'
    >
      <use xlinkHref={`#${id}`} />
    </svg>
  );
}

export default Icon;
