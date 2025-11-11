const Button = ({ name, isBeam = false, containerClass = '', to, onClick }) => {
  const handleClick = (e) => {
    // If `to` is an in-page hash, perform smooth scrolling
    if (to && typeof to === 'string' && to.startsWith('#')) {
      // Prevent default in case this is used on an anchor or button
      e && e.preventDefault && e.preventDefault();
      const id = to.slice(1);
      const el = document.getElementById(id) || document.querySelector(to);
      if (el && typeof el.scrollIntoView === 'function') {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    // Call any provided onClick handler as well
    if (onClick && typeof onClick === 'function') {
      onClick(e);
    }
  };

  // If `to` is an external link (http / mailto), render an anchor
  if (to && (to.startsWith('http') || to.startsWith('mailto:'))) {
    return (
      <a href={to} className={`btn ${containerClass}`}>
        {isBeam && (
          <span className="relative flex h-3 w-3">
            <span className="btn-ping"></span>
            <span className="btn-ping_dot"></span>
          </span>
        )}
        {name}
      </a>
    );
  }

  return (
    <button onClick={handleClick} className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
