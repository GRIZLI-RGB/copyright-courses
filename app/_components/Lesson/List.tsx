import Text from "./Text";
interface IList{
    children: Array<string>;
}

export default function List({children}:IList){
    return(
        <div className="ml-[90px] mt-[20px]">
            <ul className="list-disc">
                {children.map((child) => <li><Text type="notOrangeList">{child}</Text></li>)}
            </ul>
        </div>
    )
}