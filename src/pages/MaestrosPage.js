import * as React from "react"
import MaestrosForm from "../components/MaestrosForm";

export function MaestrosPage(){
    return(
        <div>
            <h1 className="text-3xl font-bold p-10">Profesor</h1>
            <div className="container mx-auto px-4">
                <MaestrosForm></MaestrosForm>
            </div>
        </div>
    );
}