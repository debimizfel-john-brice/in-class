import { useEffect } from "react";

function useTitle(title: string): void {
    useEffect(() => {
        document.title = `Northwind | ${title}`;
    }, []);
}

export default useTitle;