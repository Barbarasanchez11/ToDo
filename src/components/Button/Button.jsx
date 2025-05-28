
const Button = ({ type = 'primary', children, onClick }) => {
  const classMap = {
    primary: 'btn-primary',
    delete: 'btn-delete',
  };

  return (
    <button className={classMap[type]} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

