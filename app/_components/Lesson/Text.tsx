import React from "react";

interface IText{
    children: React.ReactNode;
    type: string;
}
export default function Text({children, type} : IText){

    const classesMargin = "mr-[50px] ml-[50px]";

    if (type === "notOrange"){
        return (
            <div className={`mt-[30px] ${classesMargin}`}>
                <p className="tracking-[0.5px] leading-[27px] font-medium">{children}</p>
            </div>
        )
    }

    if (type === "orange"){
        return (
            <div className={`bg-[#DA8D46] px-[30px] py-[24px] text-[18px] tracking-[0.5px] leading-[27px] mt-[30px] ${classesMargin}`}>
            <p className="text-[#FFFFFF]">{children}</p>
        </div>
        )
    }

    if (type === "notOrangeList"){
        return (
            <div className={`mt-[5px]`}>
                <p className="tracking-[0.5px] leading-[27px] font-medium">{children}</p>
            </div>
        )
    }
}