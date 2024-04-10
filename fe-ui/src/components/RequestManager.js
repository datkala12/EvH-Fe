import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export default function ProductManager(props) {
    const [data, setData] = useState([])
    const [openAdd, setOpenAdd] = useState(false)
    const [id, setId] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [price, setPrice] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [cate_id, setCate_id] = React.useState('')

    const getListRequest = async () => {
        try {
            const res = await axios.get("http://localhost:8080/api/request/list")
            return res.data
        } catch (error) {
            console.error("error", error)
        }
    }
    const fetchData = React.useCallback(async () => {
        try {
            const result = await getListRequest();
            setData(result);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [])

    React.useEffect(() => {
        fetchData();
    }, [fetchData]);

    const columns = [
        { id: 'id', name: 'Id' },
        { id: 'email', name: 'Email' },
        { id: 'price', name: 'Price' },
        { id: 'description', name: 'Description' },
        { id: 'cate_id', name: 'Name' }
    ]

    const addRequest = async () => {
        try {
            const res = await axios.post("http://localhost:8080/api/admin/request", {
                id, email, price, description, cate_id
            })
            return res.data
        } catch (error) {
            console.error("error", error)
        }
    }

    console.log("id", id)

    return (
        <div>
            <Paper sx={{ margin: '1%' }}>

                <div style={{ margin: '1%' }}>
                    <Button variant="contained" onClick={() => { setOpenAdd(!openAdd) }}>
                        {(openAdd) ? "Cancel" : "Add new request"}
                    </Button>
                </div>
                {openAdd && (
                    <Grid container spacing={2} sx={{ padding: 5 }}>
                        <Grid item xs={3}>
                            <TextField id="outlined-basic" value={id} onChange={(e) => { setId(e.target.value) }} label="Request Id" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="outlined-basic" value={email} onChange={(e) => { setEmail(e.target.value) }} label="Email" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="outlined-basic" value={price} onChange={(e) => { setPrice(e.target.value) }} label="Price" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="outlined-basic" value={description} onChange={(e) => { setDescription(e.target.value) }} label="Description" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField id="outlined-basic" value={cate_id} onChange={(e) => { setCate_id(e.target.value) }} label="Name" variant="outlined" fullWidth />
                        </Grid>
                        <Grid item xs={3} >
                            <Button onClick={addRequest} variant="outlined"> Submit
                            </Button>
                        </Grid>

                    </Grid>
                )}



                <div style={{ margin: '1%' }}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow style={{ backgroundColor: 'midnightblue' }}>
                                    {columns.map((column) =>
                                        <TableCell key={column.id} style={{ color: 'white' }}>{column.name}</TableCell>
                                    )}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data?.map((request) => (
                                    <TableRow>
                                        <TableCell>{request.id}</TableCell>
                                        <TableCell>{request.email}</TableCell>
                                        <TableCell>{request.price}</TableCell>
                                        <TableCell>{request.description}</TableCell>
                                        <TableCell>{request.cate_id}</TableCell>
                                    </TableRow>
                                )
                                )
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {/* <TablePagination
                            rowsPerPageOptions={[2, 5, 10, 20]}
                            component={'div'}
                            onPageChange={handlepagechange}
                            onRowsPerPageChange={handlerowperpagechange}
                        >
                        </TablePagination> */}
                </div>
            </Paper>

            {/* <Dialog open={open} onClose={closepopup} fullWidth maxWidth="sm">
                    <DialogTitle>
                        <span>{title}</span>
                        <IconButton style={{ float: 'right' }} onClick={closepopup}><CloseIcon color="primary"></CloseIcon></IconButton>
                    </DialogTitle>
                    <DialogContent>
                        <form onSubmit={handlesubmit}>
                            <Stack spacing={2} margin={2}>
                                <TextField required error={name.length === 0} value={name} onChange={e => { namechange(e.target.value) }} variant="outlined" label="Name"></TextField>
                                <TextField required error={name.length === 0} value={email} onChange={e => { emailchange(e.target.value) }} variant="outlined" label="Email"></TextField>
                                <TextField required error={name.length === 0} value={phone} onChange={e => { phonechange(e.target.value) }} variant="outlined" label="Phone"></TextField>
                                <TextField multiline maxRows={2} minRows={2} value={address} onChange={e => { addresschange(e.target.value) }} variant="outlined" label="Address"></TextField>
                                <RadioGroup value={type} onChange={e => { typechange(e.target.value) }} row>
                                    <FormControlLabel value="MNC" control={<Radio color="success"></Radio>} label="MNC"></FormControlLabel>
                                    <FormControlLabel value="DOMESTIC" control={<Radio></Radio>} label="DOMESTIC"></FormControlLabel>
                                </RadioGroup>
                                <FormControlLabel checked={agreeterm} onChange={e => { agreetermchange(e.target.checked) }} control={<Checkbox></Checkbox>} label="Agree Terms & Conditions"></FormControlLabel>
                                <Button disabled={!agreeterm} variant="contained" type="submit">Submit</Button>
                            </Stack>
                        </form>
                    </DialogContent>
                </Dialog> */}
        </div>
    );
}

