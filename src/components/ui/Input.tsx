import { Dispatch, SetStateAction, useState } from 'react'

interface InputProps {
  id: string;
  type: string;
  icon: string;
  label: string;
  errorMessage?: string;
  autoComplete?: string;
  placeholder: string;
  required?: boolean;
  value?: string;
  disabled?: boolean;
  setValue: Dispatch<SetStateAction<string>>
  ariaLabel: string
}

const Input = ({ id, icon, type, label, errorMessage, autoComplete, placeholder, required, value, setValue, disabled, ariaLabel}: InputProps) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isInputEmpty, setIsInputEmpty] = useState(false);

  const handleOnFocus = ():void => {
    setIsFocus(true);
  }

  const handleOnBlur = ():void => {
    setIsFocus(false);
    if(value?.length === 0) {
      setIsInputEmpty(true);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if(e.target.value.length > 0) {                      
      setIsInputEmpty(false);
    }
  }

  return (
    <div>
      <label htmlFor={label} className={`pb-1 block text-sm font-extralight ${isInputEmpty ? 'text-red-custom': ''}`}>{label}</label>
      <div className={`border border-grey-custom-500 transition-border duration-150 overflow-hidden px-4 py-3 rounded-lg flex items-center gap-3 ${isFocus ? 'border-purple-custom-800 shadow-purple-custom-800 input-active': ''} ${isInputEmpty ? 'border-red-custom': ''} `} 
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}>
        <img src={icon} alt="icon input" className={`${icon === '' ? 'hidden' : ''}`} />
        <input 
          aria-label={label}
          id={label}
          required={required}
          type={type} 
          autoComplete='email'
          disabled={disabled || false}
          className='w-full outline-none bg-transparent'
          min={type === 'password' ? 8 : 0} 
          placeholder={placeholder}
          value={value}
          onChange={handleChange} />
        <span className={`text-red-custom hidden text-xs min-w-fit ${isInputEmpty ? 'md:block' : 'md:hidden'}`}>Can't be empty</span>
      </div>
      <span className={`text-red-custom text-xs transition-all pt-2 duration-200 ${isInputEmpty ? 'block' : 'hidden'} font-light md:hidden`}>Can't be empty</span>
    </div>
  )
}

export default Input