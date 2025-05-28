const InputCheckbox = ({ id, checked, onClick }) => (
  <input type="checkbox" id={id} checked={checked} onChange={onClick} className="input-checkbox" />
);
export default InputCheckbox;
