import "./checkbox.scss";

const Checkbox = ({ className, key, onChecked, onChange, text }) => {

    return (
        <label className={`custom-checkbox ${className}`}>
            <input id={key}
                className={`custom-checkbox__input ${className}__checkbox`}
              type="checkbox"
              checked={onChecked}
              onChange={onChange}
            />
            <p className={`custom-checkbox__text ${className}__text`}>{text}</p>
        </label>
    );
};

export default Checkbox;
