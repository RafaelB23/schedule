import * as React from "react"
import MateriaForm from "../components/MateriaForm";

export function MateriasPage(){
    return(
        <div>
            <h1 className="text-3xl font-bold p-10">Materia</h1>
            <div className="container mx-auto px-4">
                <MateriaForm></MateriaForm>
            </div>
        </div>
    );
}