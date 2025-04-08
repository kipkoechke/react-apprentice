export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const baseClasses =
    "font-semibold rounded-full transition-colors focus:outline-none focus:ring-2";

  const variants = {
    primary: "bg-green-500 hover:bg-green-600 text-white focus:ring-green-300",
    white: "bg-white hover:bg-gray-100 text-green-600 focus:ring-green-200",
    outline:
      "bg-transparent border border-current hover:bg-green-50 text-green-600 focus:ring-green-200",
  };

  const sizes = {
    sm: "py-1 px-3 text-sm",
    md: "py-2 px-6",
    lg: "py-3 px-8 text-lg",
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
