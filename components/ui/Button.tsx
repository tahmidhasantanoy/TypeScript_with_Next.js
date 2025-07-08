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
    // onClick : (param : string) => string;
    handleFunc : () => void;
    variant : "primary" | "secondary" | "danger"; // This is a union of string literal types
    type? : "button" | "submit" | "reset"; // Optional prop with union type
    disable? : boolean; // Optional prop with boolean
}

const Button = ({label,handleFunc,variant,type,disable} : ButtonProps) => {

    console.log(handleFunc, "onClick function from Button component");
    console.log(variant);

    // ()=>{
    //         console.log("See more clicked");
    //     // Implement your logic to fetch more posts or navigate to another page
    //     } 'onClick function from Button component

    const base = "px-6 py-3 text-white text-sm rounded-md transition-all duration-200"
    const variants = {
        primary: "bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-400",
        secondary: "bg-gray-500 hover:bg-gray-600 focus:ring-2 focus:ring-gray-400",
        danger: "bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-400",
    }


    return (
        <button
            type={type || "button"}
            onClick={handleFunc}
            disabled={disable}
            className={`${base} ${variants[variant]}`}>
            {label}
        </button>
    );
};

export default Button;