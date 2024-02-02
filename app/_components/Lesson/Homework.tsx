interface IHomework{
    children: Array<string>;
}



export default function Homework({children} : IHomework){

    let index = 0;

    return(
        <div className="flex flex-col">
            <div className="flex items-center ml-[50px]">
                <p className={`text-[48px] font-bold`}>Домашнее задание</p>
                <span className={`homework-ask text-[20px] font-bold ml-[17px] rounded-[50px] bg-[#353535] w-[40px] h-[40px] flex justify-center items-center text-[#FFFFFF]`}>?</span>
            </div>
            <ol className="ml-[70px] mt-[30px]" start={1}>
                {children.map((child, index) => 
                    <li className="tracking-[0.5px] leading-[27px] font-medium mb-[20px] mb-[16px]" key={index}> <span className="bg-[#000000] pr-[8px] pl-[8px] pt-[2px] pb-[2px] rounded-[50px] text-[#FFFFFF]">{index+1}</span> {child}</li>
                )}
            </ol>
        </div>
    )
}

