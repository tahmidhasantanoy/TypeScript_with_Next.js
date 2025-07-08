"use client";

// interface ButtonProps {
//     label : string;
//     onClick : () => string;
//     variant : "primary" | "secondary" | "danger"; // This is a union of string literal types
//     type? : "button" | "submit" | "reset"; // Optional prop with union type
//     disable? : boolean; // Optional prop with boolean
// }

interface ButtonProps {
    label : string;
    onClick : (param : string) => string;
    variant : "primary" | "secondary" | "danger"; // This is a union of string literal types
    type? : "button" | "submit" | "reset"; // Optional prop with union type
    disable? : boolean; // Optional prop with boolean
}

const Button = ({label,onClick,variant,type,disable} : ButtonProps) => {

    console.log(onClick, "onClick function from Button component");

      const handleSeeMore = (data : string) => {
        const message = onClick(data); // string
        console.log(data);
        console.log("Returned from onClick:", message);
  };

    const base = "px-6 py-3 text-white text-sm rounded-md transition-all duration-200"
    const variants = {
        primary: "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400",
        secondary: "bg-gray-500 hover:bg-gray-600 focus:ring-2 focus:ring-gray-400",
        danger: "bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-400",
    }


    return (
        <button
            type={type || "button"}
            onClick={handleSeeMore}
            disabled={disable}
            className={`${base} ${variants["primary"]}`}>
            {label}
        </button>
    );
};

export default Button;