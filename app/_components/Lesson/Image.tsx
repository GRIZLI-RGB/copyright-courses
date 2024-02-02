interface IImage{
    children: string;
}

export default function Image({children} : IImage){
    const classesMargin = "mr-[50px] ml-[50px]";
    return(
        <div className={`flex justify-center ${classesMargin}`}>
                <img src={children} alt=""/>
        </div>
    )
}