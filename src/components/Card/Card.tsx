// components/Card.tsx
import { Trend } from "@components/Global/Icon";
import React from "react";
import { ReactSVG } from "react-svg";

interface CardProps {
    title: string;
    value: number | string;
    growth?: string;
    icon?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, value, growth, icon }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm p-4 flex flex-col gap-2 w-full">
            <div className="">
                {icon && <span>{icon}</span>}
                <span className="text-sm text-[#252525] font-medium">{title}</span>
            </div>
            <div className="flex items-center">
                <h2 className="text-2xl font-bold text-black">{value}</h2>
                {growth && <span className="text-green-600 text-sm flex"><ReactSVG src={Trend}/>{growth}</span>}
            </div>
        </div>
    );
};

export default Card;
