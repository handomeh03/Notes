import { useEffect, useState } from "react";

export function useLoading() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 150); 

        return () => clearTimeout(timer);
    }, []); 

    return { loading };
}
