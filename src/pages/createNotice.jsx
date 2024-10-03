import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextareaAutosize,
    TextField,
    Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid2';
import { Link, useParams } from 'react-router-dom';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { useEffect } from 'react';

export default function CreateNotice() {
    const { id } = useParams();  // Get case id from the URL if editing

    // const [caseId, setCaseId] = useState();
    const [accountNumber, setAccountNumber] = useState();
    const [clientName, setClientName] = useState();
    const [demandedAmount, setDemandedAmount] = useState();
    const [paymentDueDate, setPaymentDueDate] = useState();
    // const [isEdit, setIsEdit] = useState(false);  // Flag to differentiate between add and edit
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [caseId, setCaseId] = useState(id);
    

    // Fetch case data if editing
    // useEffect(() => {
    //     if (id) {
    //         // setIsEdit(true);
    //         const fetchCaseDetails = async () => {
    //             setLoading(true);
    //             try {
    //                 const response = await fetch(`http://localhost:5000/api/cases/${id}`); // Replace with your API URL
    //                 if (!response.ok) {
    //                     throw new Error('Failed to fetch case details');
    //                 }
    //                 const data = await response.json();
    //                 console.log("data",data);

    //                 setCaseId(data._id);
                    
    //                 //setHearingDate(data.hearingDate);
    //                 // setCaseData({
    //                 //     caseName: data.caseName,
    //                 //     clientName: data.clientName,
    //                 //     caseCategory: data.caseCategory,
    //                 //     status: data.status
    //                 // });
    //             } catch (err) {
    //                 setError(err.message);
    //             } finally {
    //                 setLoading(false);
    //             }
    //         };

    //         fetchCaseDetails();
    //     }
    // }, [id]);  // Runs only if the case id exists

    const handleCreateNotice = async (e) => {
        e.preventDefault();
        const newNotice = { caseId, clientName, paymentDueDate, accountNumber, demandedAmount };

        try {
            const response = await fetch('http://localhost:5000/api/notices/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newNotice),
            });
            // let response;
            // if (isEdit) {
            //     // Edit case (PUT request)
            //     response = await fetch(`http://localhost:5000/api/cases/update/${id}`, {
            //         method: 'PUT',
            //         headers: {
            //             'Content-Type': 'application/json',
            //         },
            //         body: JSON.stringify(newNotice),
            //     });
            // } else {
            //     response = await fetch('http://localhost:5000/api/notices/create', {
            //         method: 'POST',
            //         headers: {
            //             'Content-Type': 'application/json',
            //         },
            //         body: JSON.stringify(newNotice),
            //     });
            // }

            if (!response.ok) {
                throw new Error('Notice not created');
            }

            const data = await response.json();
            // Handle successful create case
            console.log('Notice created successful', data);
            // setSuccess(true);
            // setError(null);
            // !error && navigate("/login");
        } catch (error) {
            console.error('Error:', error);
            // setError('Case creation failed, please try again.');
            // setSuccess(false);
        }
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <Grid container style={{ height: '100vh' }} alignItems="center" justifyContent="center">
                <center>
                    <Card sx={{ width: 400, borderRadius: "20px", padding: "10px", boxShadow: " 3px 3px 15px rgba(0.3, 0.3, 0.3, 0.2)" }}>
                        {/* <CardHeader title="Sign Up" sx={{ color: "#00308F" }} /> */}
                        <h1 style={{ marginTop: "50px", marginLeft: "32px", fontSize: "30px", display: "flex", alignContent: "flex-start" }}>Create Notice</h1>

                        <CardContent>
                            <Stack direction="column" width={300} spacing={4} >

                                {/* <TextField id="standard-basic" label="Case Number" name='caseId' value={caseId} onChange={(e) => setCaseId(e.target.value)} variant="standard" /> */}

                                <TextField id="standard-basic" label="Client Name" name='clientName' value={clientName} onChange={(e) => setClientName(e.target.value)} variant="standard" />

                                <TextField id="standard-basic" label="Account Number" name='accountNumber' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} variant="standard" />

                                <TextField id="standard-basic" label="Demanded Amount" name='demandedAmount' value={demandedAmount} onChange={(e) => setDemandedAmount(e.target.value)} variant="standard" />


                                <TextField id="standard-basic" label="Payment Due Date" name='paymentDueDate' value={paymentDueDate} onChange={(e) => setPaymentDueDate(e.target.value)} variant="standard" />
                                {/* <DatePicker label="Basic date picker" /> */}
                                {/* <label style={{ display: "flex", alignContent: "flex-start", marginBottom: 0 }}>Case Details</label>
                                <TextareaAutosize id='standard-basic' variant="standard" maxRows={4} style={{ backgroundColor: "white", borderTop: "none", borderRight: "none", borderLeft: "none" }}>Case Details</TextareaAutosize> */}

                                {/* <LocalizationProvider   >
                                    <DemoContainer components={['DatePicker']}>
                                        <DatePicker label="Basic date picker" />
                                    </DemoContainer>
                                </LocalizationProvider> */}



                            </Stack>

                        </CardContent>
                        <CardActions >
                            <Button sx={{ marginLeft: "30px", marginBottom: 5, marginTop: 3 }} variant="contained" onClick={handleCreateNotice}>Create Notice</Button>
                        </CardActions>

                    </Card>
                </center>
            </Grid>
        </React.Fragment>
    )
}
