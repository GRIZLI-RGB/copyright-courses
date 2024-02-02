interface IHeading{
    type: string;
    children: React.ReactNode;
}

export default function Heading({type, children}: IHeading){
    const classesMargin = "mr-[50px] ml-[50px] mt-[30px]";
    if (type === "h1"){
        return(
            <h1 className={`text-[48px] font-bold ${classesMargin}`}>{children}</h1>
        )
    }

    if (type === "h3"){
        return(
            <h3 className={`text-[#505050] text-[32px] font-bold ${classesMargin}`}>{children}</h3>
        )
    }
}