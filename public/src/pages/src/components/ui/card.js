export const Card = ({ children }) => (
  <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg">{children}</div>
);

export const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);

