interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button type="submit" className="bg-purple-custom-800 rounded-lg transition-colors duration-150 text-center py-3 w-full text-white hover:bg-purple-custom-500 hover:input-active">
      { label }
    </button>
  )
}

export default Button