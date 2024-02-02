
interface ITesting{
    children: Array<{question: string, answers: Array<string>, index_right_answer: number}>;
}

export default function Testing({children}:ITesting){
    return(
        <div className="flex flex-col mr-[50px]">
            <div className="flex items-center">
                <p className={`text-[48px] font-bold`}>Тестирование</p>
                <span className={`text-[20px] font-bold ml-[17px] rounded-[50px] bg-[#353535] w-[40px] h-[40px] flex justify-center items-center text-[#FFFFFF]`}>?</span>
            </div>

            <p className="mt-[10px]">{children[0].question}</p>
            
            <div className="flex flex-col flex-start mt-[12px]">
                {children[0].answers.map((child, index) => <button className="text-left bg-[#353535] rounded-[100px] pt-[5px] pb-[5px] mb-[8px] min-w-[573px]">
                    <span className="text-[#FFFFFF] ml-[16px]">{`${index+1}) ${child}`}</span>
                </button>)}
            </div>
            
        </div>
    )

}