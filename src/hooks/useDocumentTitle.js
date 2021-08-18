import { useEffect } from 'react';

export default function useDocumentTitle(title) {
    //the above replaces componentDidMount and componentDidUpdate , componentUnmount
    useEffect(() => {
        document.title = title;

        return () => {
            console.log("clean up")
        };
    });
}
    