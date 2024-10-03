import React from 'react'
import Grid from '@mui/material/Grid2';
import { Alert, Card, CardHeader, Chip, CircularProgress, IconButton, Stack, Typography } from '@mui/material';
import { Delete, Edit, NoteAdd } from '@mui/icons-material';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AllCases() {
    const navigate = useNavigate();

    const [caseList, setCaseList] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchCases = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/cases/list'); // Replace with your API URL
                if (!response.ok) {
                    throw new Error('Failed to fetch cases');
                }
                const data = await response.json();
                setCaseList(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCases();
    }, []); // Empty dependency array means this effect runs once on mount


    // Function to delete a case by ID
    const handleDeleteCase = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/cases/delete/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Failed to delete case');
            }

            // If successful, update the case list by removing the deleted case
            setCaseList((prevCaseList) => {
                const updatedList = prevCaseList.filter((caseItem) => caseItem._id !== id);
                console.log('Updated Case List:', updatedList); // Log the updated list to confirm the change
                return updatedList;
            });
        } catch (error) {
            setError('Error deleting the case');
        }
    };

    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return <Alert severity="error">{error}</Alert>;
    }



    return (

        <Grid container padding={2}>
            <Typography variant="h4" style={{ color: "black", fontFamily: "serif", textAlign: "center" }}>
                Case List
            </Typography>
            <Grid size={12} marginTop={5} display="flex" alignContent="center">
                <Stack spacing={2} style={{ width: 1485 }}>
                    {caseList?.map((cases) => {

                        return (
                            <>
                                <Card key={cases._id} sx={{ borderRadius: "15px", padding: "20px", marginBottom: 3, boxShadow: " 2px 2px 10px rgba(0.3, 0.3, 0.3, 0.2)" }}>
                                    <Stack direction="row" justifyContent="space-between" spacing={3}>
                                        <Stack>
                                            <Typography variant='h5' style={{ fontWeight: 800, marginBottom: 10, fontFamily: "inherit" }}>{cases?.caseName}</Typography>
                                            <Typography variant='h7' style={{ fontWeight: 600, marginLeft: 10 }}>Case ID: {cases?.caseId}</Typography><br />
                                            <Typography variant='h7' style={{ fontWeight: 600, marginLeft: 10 }}>Client Name: {cases?.clientName}</Typography><br />
                                            <Typography variant='h7' style={{ fontWeight: 600, marginLeft: 10 }}>Case Category: {cases?.caseCategory}</Typography>
                                        </Stack>
                                        <Stack>
                                            <Stack direction="row" >
                                                <IconButton aria-label="edit" color="success" onClick={() => navigate("/add-cases/" + cases._id)}>
                                                    <Edit />
                                                </IconButton>
                                                <IconButton aria-label="delete" color="error" onClick={() => handleDeleteCase(cases._id)}>
                                                    <Delete />
                                                </IconButton>
                                                <IconButton aria-label="create" color="warning" onClick={() => navigate("/create-notice/" + cases._id)}>
                                                    <NoteAdd />
                                                </IconButton>
                                            </Stack>
                                            <Chip label={cases?.status}
                                                variant='filled'
                                                color={cases?.status == "In Progress" ? "warning" : "success"}
                                                sx={{ position: "relative", top: 90 }} />
                                        </Stack>
                                    </Stack>
                                </Card>
                            </>
                        )
                    })}

                </Stack>
            </Grid>
        </Grid>
    )
}
