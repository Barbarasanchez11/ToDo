const Inputs = ({type, value, onChange, className='',onClick, id,checked}) => {
   return(
    <input
        type='text'
        value={value}
        onChange={onChange}
        onClick={onClick}
        className={className}
        id={id}
        checked={checked}

    />    
   )
}

export default Inputs