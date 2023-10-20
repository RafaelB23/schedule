import * as React from "react";
import MaestrosForm from "../components/MaestrosForm";
import { Button, Card, CardContent, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMaestroContext } from "../contexts/maestroContext"
import { useState } from "react";

export function MaestrosPage() {
  const navigate = useNavigate();

  const context = useMaestroContext()

  const handleForm = (data) => {
    context.updateFormMaestro(data)
    navigate("/form-materias");
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold p-10">Profesor</h1>
      <div className="container mx-auto px-4">
        <MaestrosForm onDataReciver={handleForm} />
        <div className="mt-6">
          <Card>
            <Box>
              <CardContent>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                  {JSON.stringify(context.formMaestro)}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </div>
      </div>
    </div>
  );
}
