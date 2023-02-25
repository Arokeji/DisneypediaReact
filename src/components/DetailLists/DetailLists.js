import "./DetailLists.scss";

const DetailLists = ({appearances}) => {

    return(
        appearances.map(element => {
            if(element.list.length > 0){
                console.log(element);
                console.log("Largo del elemento " + element.type + ": " + element.list.length);
                return (
                    <p key={element.type} className={"cards__" + element.type}>
                        <span className='cards__bold'>{element.type}</span>
                    { 
                    element.list.map((item) => {
                        return (
                            <span key={ item }>
                                { item },
                            </span>
                        )
                    })
                    }
                    </p>
                );
            } else {
                return "";
            }
        })
    );
}

export default DetailLists;