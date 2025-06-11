import { useRef, useState } from 'react';
import css from './CollapsibleSection.module.css';
import Icon from '../../../reusable-global/Icon/Icon';
import clsx from 'clsx';

function CollapsibleSection({ title, children }) {
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const isOpen = height > 0;

  function handleToggle() {
    if (isOpen) return setHeight(0);

    const content = contentRef.current;
    const height = content?.scrollHeight;

    setHeight(height);
  }

  return (
    <section
      className={css.section}
      onClick={handleToggle}
    >
      <h2 className={css.subtitle}>
        <span>{title}</span>

        <button
          className={css.button}
          type='button'
          onClick={handleToggle}
        >
          <Icon
            id='icon-chevron-down'
            width={14}
            height={8}
            iconClass={clsx(isOpen && css.iconOpen)}
          />
        </button>
      </h2>

      <div
        className={css.content}
        style={{ height }}
        ref={contentRef}
      >
        <div className={css.paddingWrapper}>{children}</div>
      </div>
    </section>
  );
}

export default CollapsibleSection;
