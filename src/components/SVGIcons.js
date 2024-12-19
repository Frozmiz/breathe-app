export const LeafIcon = ({ className, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "orange", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "red", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M12 2C12 2 9 4 6 8C3 12 5 16 6 17C7 18 9 20 12 20C15 20 17 18 18 17C19 16 21 12 18 8C15 4 12 2 12 2Z"
      fill="url(#grad1)"
    />
  </svg>
);

export const LeafIconBottomRight = ({ className, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "orange", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "red", stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path
      d="M12 2C9.5 2 6.5 5 5.5 7.5C4.5 10 5.5 13 7.5 15C9.5 17 12 18 12 18C12 18 14.5 17 16.5 15C18.5 13 19.5 10 18.5 7.5C17.5 5 14.5 2 12 2ZM12 6C13 6 14 8 14 10C14 12 13 14 12 14C11 14 10 12 10 10C10 8 11 6 12 6Z"
      fill="url(#grad1)"
    />
  </svg>
);

export const LeafRight = ({className, style}) => (<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6 text-green-400 group-hover:text-green-600 transition-colors duration-700"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2C9.5 2 6.5 5 5.5 7.5C4.5 10 5.5 13 7.5 15C9.5 17 12 18 12 18C12 18 14.5 17 16.5 15C18.5 13 19.5 10 18.5 7.5C17.5 5 14.5 2 12 2ZM12 6C13 6 14 8 14 10C14 12 13 14 12 14C11 14 10 12 10 10C10 8 11 6 12 6Z"
    />
  </svg>);

export const LeafLeft = ({className, style}) => (<svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="w-6 h-6 text-green-400 group-hover:text-green-600 transition-colors duration-700"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 2C9.5 2 6.5 5 5.5 7.5C4.5 10 5.5 13 7.5 15C9.5 17 12 18 12 18C12 18 14.5 17 16.5 15C18.5 13 19.5 10 18.5 7.5C17.5 5 14.5 2 12 2ZM12 6C13 6 14 8 14 10C14 12 13 14 12 14C11 14 10 12 10 10C10 8 11 6 12 6Z"
    />
  </svg>);