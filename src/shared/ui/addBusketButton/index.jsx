import './Button.css';

export const Button = ({ children, onClick, disabled, className = '' }) => {
  return (
    <button 
      type="button" 
      onClick={onClick} 
      disabled={disabled}
      className={`px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-gray-300 disabled:cursor-not-allowed ${className}`}
    >
      {children}
    </button>
  );
};