import { useEffect } from "react";

useEffect(() => {
    fetch('http://localhost:5173/')
    .then(res => {
        return res.json();
    })
    .then(data => {
        console.log(data)
    })
}, []);