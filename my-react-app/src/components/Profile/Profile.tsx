import React from "react";
import { useLoaderData } from "react-router-dom";

export default function Profile(){
    const data = useLoaderData() as User
    console.log(data);
    return (
        <>
        <h1> {`Profile of ${data.displayName}`} </h1>
        </>
    )
}

type User = {
    displayName:string
}