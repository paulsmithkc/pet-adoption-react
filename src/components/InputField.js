function InputField({ label, id, className, error, ...rest }) {
  const inputClasses = 'form-control ' + (error ? 'is-invalid' : 'is-valid');

  return (
    <div className="mb-3">
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input className={inputClasses} id={id} {...rest} />
      {error && <div className="text-danger mt-1">{error}</div>}
    </div>
  );
}

export default InputField;
