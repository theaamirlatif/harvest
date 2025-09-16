// components/Card.tsx
import React from "react";

interface CardProps {
    title: string;
    value: number | string;
    growth?: string;
    icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, value, growth, icon }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500 font-medium">{title}</span>
                {icon && <span>{icon}</span>}
            </div>
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-black">{value}</h2>
                {growth && <span className="text-green-600 text-sm">{growth}</span>}
            </div>
        </div>
    );
};

export default Card;
