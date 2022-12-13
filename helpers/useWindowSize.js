import {useEffect, useState} from "react";

export function useWindowSize() {
    const [size, setSize] = useState([]);
    useEffect(() => {
        const handleResize = () =>  setSize([window.innerWidth,window.innerHeight]);
        handleResize()
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return size;
}