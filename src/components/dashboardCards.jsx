import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import GavelIcon from '@mui/icons-material/Gavel';
import GroupsIcon from '@mui/icons-material/Groups';
import BalanceIcon from '@mui/icons-material/Balance';
import DescriptionIcon from '@mui/icons-material/Description';
import Groups3Icon from '@mui/icons-material/Groups3';
import { useNavigate } from 'react-router-dom';

export default function DashboardCards() {
    const navigate = useNavigate();

    const handleNavigate = () =>{
        navigate("/allCases");
    }
    return (
        <div>
            <Grid container spacing={1} >
                {/* <Grid container sx={{ marginBottom: 2 }} color="darkgray" spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}> */}
                {/* {Array.from(Array(6)).map((_, index) => (
        <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            <Item>{index + 1}</Item>
        </Grid>
    ))} */}
                {/* <Grid > */}
                <Grid size={4}>
                    <Card sx={{ width: 405, borderRadius:"5px 25px 5px 5px", boxShadow: " 1px 2px 5px rgba(0.3, 0.3, 0.3, 0.2)", backgroundColor: "#e8e8e8" }} >
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    30
                                </Typography>
                                <Typography variant="h5" gutterBottom component="div">
                                    Upcoming Cases
                                </Typography>
                                <GavelIcon  sx={{position: "absolute", right: 50, top:22, fontSize:"60px"}}/>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ justifyContent: "center", backgroundColor: "ThreeDFace" }}>
                            <Button size="medium" color="primary" >
                                <span style={{ color: "white" }}>View All</span> &nbsp;<span><ArrowForwardIosIcon fontSize='10px' sx={{ marginTop: "5px", color: "white" }} /></span>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid size={4}>
                    <Card sx={{ width: 405,borderRadius:"5px 25px 5px 5px", boxShadow: " 1px 2px 5px rgba(0.3, 0.3, 0.3, 0.2)", backgroundColor: "#e8e8e8" }}>
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    30
                                </Typography>
                                <Typography variant="h5" gutterBottom component="div">
                                    Notifications
                                </Typography>
                                <NotificationsActiveIcon  sx={{position: "absolute", right: 50, top:22, fontSize:"60px"}}/>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ justifyContent: "center", backgroundColor: "ThreeDFace" }}>
                            <Button size="medium" color="primary">
                                <span style={{ color: "white" }}>View All</span> &nbsp;<span><ArrowForwardIosIcon fontSize='10px' sx={{ marginTop: "5px", color: "white" }} /></span>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid size={4}>
                    <Card sx={{ width: 405,borderRadius:"5px 25px 5px 5px", marginBottom: "20px", boxShadow: " 1px 2px 5px rgba(0.3, 0.3, 0.3, 0.2)", backgroundColor: "#e8e8e8" }}>
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    30
                                </Typography>
                                <Typography variant="h5" gutterBottom component="div">
                                    Team Members
                                </Typography>
                                <GroupsIcon  sx={{position: "absolute", right: 50, top:22, fontSize:"80px"}}/>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ justifyContent: "center", backgroundColor: "ThreeDFace" }}>
                            <Button size="medium" color="primary">
                                <span style={{ color: "white" }}>View All</span> &nbsp;<span><ArrowForwardIosIcon fontSize='10px' sx={{ marginTop: "5px", color: "white" }} /></span>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                {/* </Grid> */}
                {/* </Grid> */}

                <Grid size={4}>
                    {/* {Array.from(Array(6)).map((_, index) => (
        <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
            <Item>{index + 1}</Item>
        </Grid>
    ))} */}
                    <Card sx={{ width: 405,borderRadius:"5px 25px 5px 5px", boxShadow: " 1px 2px 5px rgba(0.3, 0.3, 0.3, 0.2)", backgroundColor: "#e8e8e8" }}>
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    30
                                </Typography>
                                <Typography variant="h5" gutterBottom component="div">
                                    Total Cases
                                </Typography>
                                <BalanceIcon  sx={{position: "absolute", right: 50, top:22, fontSize:"60px"}}/>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ justifyContent: "center", backgroundColor: "ThreeDFace" }}>
                            <Button size="medium" color="primary" onClick={handleNavigate}>
                                <span style={{ color: "white" }}>View All</span> &nbsp;<span><ArrowForwardIosIcon fontSize='10px' sx={{ marginTop: "5px", color: "white" }} /></span>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid size={4}>
                    <Card sx={{ width: 405,borderRadius:"5px 25px 5px 5px", boxShadow: " 1px 2px 5px rgba(0.3, 0.3, 0.3, 0.2)", backgroundColor: "#e8e8e8" }}>
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    30
                                </Typography>
                                <Typography variant="h5" gutterBottom component="div">
                                    Total Clients
                                </Typography>
                                <Groups3Icon  sx={{position: "absolute", right: 50, top:22, fontSize:"60px"}}/>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ justifyContent: "center", backgroundColor: "ThreeDFace" }}>
                            <Button size="medium" color="primary">
                                <span style={{ color: "white" }}>View All</span> &nbsp;<span><ArrowForwardIosIcon fontSize='10px' sx={{ marginTop: "5px", color: "white" }} /></span>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid size={4}>
                    <Card sx={{ width: 405,borderRadius:"5px 25px 5px 5px", boxShadow: " 1px 2px 5px rgba(0.3, 0.3, 0.3, 0.2)", backgroundColor: "#e8e8e8" }}>
                        <CardActionArea>

                            <CardContent>
                                <Typography gutterBottom variant="h3" component="div">
                                    30
                                </Typography>
                                <Typography variant="h5" gutterBottom component="div">
                                    Documents
                                </Typography>
                                <DescriptionIcon  sx={{position: "absolute", right: 50, top:22, fontSize:"60px"}}/>
                            </CardContent>
                        </CardActionArea>
                        <CardActions sx={{ justifyContent: "center", backgroundColor: "ThreeDFace" }}>
                            <Button size="medium" color="primary">
                                <span style={{ color: "white" }}>View All</span> &nbsp;<span><ArrowForwardIosIcon fontSize='10px' sx={{ marginTop: "5px", color: "white" }} /></span>
                            </Button>
                        </CardActions>
                    </Card>

                </Grid>
            </Grid>
        </div>
    )
}
