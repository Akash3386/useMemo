import React,{ useMemo} from "react";

const DemoList = (props) => {

    const {item} = props
    
    const sortedList = useMemo(() => {
        if (props.order){
            return props.item.sort((a,b) => a-b )
            
        }
        if (!props.order) {
            return props.item.sort((a,b) => b-a )
        } 
    },[item]) 

    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
               {sortedList.map((item) => (
                 <li key={item}>{item}</li>
               ))}
            </ul>
        </div>
    )
}

export default React.memo(DemoList);