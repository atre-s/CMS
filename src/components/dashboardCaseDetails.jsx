import { Badge, Button, Card, CardActions, CardContent, CardHeader, Chip, Divider, FormControl, Icon, InputLabel, MenuItem, Select, Stack, TextareaAutosize, TextField, Typography } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid2';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function DashboardCaseDetails() {
  return (
    <Grid container marginTop={5}>
      <Grid size={12}>
        <Card sx={{ borderRadius: "10px", padding: "20px", boxShadow: " 1px 1px 5px rgba(0.3, 0.3, 0.3, 0.2)" }}>
          <Stack direction="row" justifyContent="space-between">
            <Typography>Swagattam Das vs. Vikrant Singh</Typography>
            <Chip label="In Progress" color="success" />
          </Stack>
          <Stack direction="row" spacing={1}>
            <CalendarTodayIcon /><span>2024-06-12</span>
          </Stack>
          <Divider sx={{ marginTop: "20px", marginBottom: "20px" }} />
          <Stack direction="row" justifyContent="space-between">
            <Typography>Swagattam Das vs. DDCP Client</Typography>
            <Chip label="Scheduled" color="success" />
            {/* <Badge  color="success" badgeContent={"Scheduled"}  sx={{right:45, top:15}}/> */}
          </Stack>
          <Stack direction="row" spacing={1}>
            <CalendarTodayIcon /><span>2024-05-10</span>
          </Stack>
        </Card>

      </Grid>
    </Grid>
  )
}


