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

export default function AddCases() {

    const { id } = useParams();  // Get case id from the URL if editing
    console.log("id", id);
    

    const [caseId, setCaseId] = useState();
    const [caseName, setCaseName] = useState();
    const [clientName, setClientName] = useState();
    const [caseCategory, setCaseCategory] = useState();
    const [hearingDate, setHearingDate] = useState();
    const [isEdit, setIsEdit] = useState(false);  // Flag to differentiate between add and edit
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fetch case data if editing
    useEffect(() => {
        if (id) {
            setIsEdit(true);
            const fetchCaseDetails = async () => {
                setLoading(true);
                try {
                    const response = await fetch(`http://localhost:5000/api/cases/${id}`); // Replace with your API URL
                    if (!response.ok) {
                        throw new Error('Failed to fetch case details');
                    }
                    const data = await response.json();
                    console.log(data);
                    
                    setCaseId(data.caseId);
                    setCaseName(data.caseName);
                    setClientName(data.clientName);
                    setCaseCategory(data.caseCategory);
                    //setHearingDate(data.hearingDate);
                    // setCaseData({
                    //     caseName: data.caseName,
                    //     clientName: data.clientName,
                    //     caseCategory: data.caseCategory,
                    //     status: data.status
                    // });
                } catch (err) {
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchCaseDetails();
        }
    }, [id]);  // Runs only if the case id exists

    const handleCreateCase = async (e) => {
        e.preventDefault();
        const newUser = { caseId, caseName, clientName, caseCategory, hearingDate };

        try {
            let response;
            if(isEdit){
                // Edit case (PUT request)
                response = await fetch(`http://localhost:5000/api/cases/update/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser),
                });
            }else{
                response = await fetch('http://localhost:5000/api/cases/create', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(newUser),
                });
            } 

            if (!response.ok) {
                throw new Error('Case created');
            }

            const data = await response.json();
            // Handle successful create case
            console.log('Case created successful', data);
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
                        <h1 style={{ marginTop: "50px", marginLeft: "32px", fontSize: "30px", display: "flex", alignContent: "flex-start" }}>{isEdit ? 'Edit Case' : 'Add Case'}</h1>

                        <CardContent>
                            <Stack direction="column" width={300} spacing={4} >

                                <TextField id="standard-basic" label="Case Number" name='caseId' value={caseId} onChange={(e) => setCaseId(e.target.value)} variant="standard" />

                                <TextField id="standard-basic" label="Case Name" name='caseName' value={caseName} onChange={(e) => setCaseName(e.target.value)} variant="standard" />

                                <TextField id="standard-basic" label="Client Name" name='clientName' value={clientName} onChange={(e) => setClientName(e.target.value)} variant="standard" />

                                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-standard-label">Case Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={caseCategory}
                                        onChange={(e) => setCaseCategory(e.target.value)}
                                        label="Select Criminal Category"
                                        name='caseCategory'
                                    >
                                        <MenuItem value="">
                                            <em>Select Criminal Category</em>
                                        </MenuItem>
                                        <MenuItem value="Cyber Crimes">Cyber Crimes</MenuItem>
                                        <MenuItem value="Victimless Crimes">Victimless Crimes</MenuItem>
                                        <MenuItem value="Blue-Collar Crimes">Blue-Collar Crimes</MenuItem>
                                        <MenuItem value="White-Collar Crimes">White-Collar Crimes</MenuItem>
                                        <MenuItem value="Infractions">Infractions</MenuItem>
                                        <MenuItem value="Felonies">Felonies</MenuItem>
                                        <MenuItem value="Misdemeanors">Misdemeanors</MenuItem>
                                        <MenuItem value="Organized Crimes">Organized Crimes</MenuItem>
                                        <MenuItem value="Hate Crimes">Hate Crimes</MenuItem>
                                        <MenuItem value="Environmental Crimes">Environmental Crimes</MenuItem>
                                    </Select>
                                </FormControl>

                                <TextField id="standard-basic" label="Hearing Date" name='nextHearingDate' value={hearingDate} onChange={(e) => setHearingDate(e.target.value)} variant="standard" />
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
                            <Button sx={{ marginLeft: "30px", marginBottom: 5, marginTop: 3 }} variant="contained" onClick={handleCreateCase}>{isEdit ? 'Update Case' : 'Add Case'}</Button>
                        </CardActions>

                    </Card>
                </center>
            </Grid>
        </React.Fragment>
    )
}
