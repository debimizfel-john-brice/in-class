import { useEffect } from "react";


function useTitle( title:string ){

    useEffect(()=>{
        document.title = "Northwind - " + title;
    },[])

}
export default useTitle;