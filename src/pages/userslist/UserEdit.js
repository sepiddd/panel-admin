import React, { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle";
import { Table, TableContainer, TableHead, TableRow, TextField } from "@material-ui/core";
import TableCell from '@material-ui/core/TableCell';
import Button from "@material-ui/core/Button";
import { toast } from "react-toastify";

const UserEdit = (props) => {

    const [user, setUser] = useState('');

    useEffect(() => {
        // console.log("user", props.location.state)

        setUser(props.location.state || {})
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const onBackPressed = () => {
        props.history.push("/app/UserList");
        toast.success("با موفقیت ویرایش شد");
    }
    const setUserProperty = (key, e) => {
        switch (key) {
            case "name":
                setUser({ ...user, name: e.target.value })
                break;
            case "lastName":
                setUser({ ...user, lastName: e.target.value })
                break;
            case "email":
                setUser({ ...user, email: e.target.value })
                break;
            case "phone":
                setUser({ ...user, phone: e.target.value })
                break;
            case "address":
                setUser({ ...user, address: e.target.value })
                break;
            default:
                return
        }
    }
    return (
        <div>
            <PageTitle title="ویرایش مشخصات" />
            <TableContainer direction={"column"} spacing={2}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>نام</TableCell>
                            <TableCell align="right">نام خانوادگی</TableCell>
                            <TableCell align="right">ایمیل</TableCell>
                            <TableCell align="right">تلفن</TableCell>
                            <TableCell align="right">آدرس</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableCell>
                        <TextField fullWidth={true} placeholder={"نام "} value={user.name} onChange={e => { setUserProperty('name', e) }} />
                    </TableCell>
                    <TableCell >
                        <TextField fullWidth={true} placeholder={"نام خانوادگی "} value={user.lastName} onChange={e => { setUserProperty('lastName', e) }} />
                    </TableCell>
                    <TableCell >
                        <TextField fullWidth={true} placeholder={"ایمیل"} type="email" value={user.email} onChange={e => { setUserProperty('email', e) }} />
                    </TableCell>
                    <TableCell>
                        <TextField fullWidth={true} placeholder={"تلفن"} value={user.phone} onChange={e => { setUserProperty('phone', e) }} />
                    </TableCell>
                    <TableCell>
                        <TextField fullWidth={true} placeholder={"آدرس"} multiline={true} value={user.address} onChange={e => { setUserProperty('address', e) }} />
                    </TableCell>
                    <TableCell>
                        <Button variant={"contained"} onClick={onBackPressed}>ذخیره</Button>  </TableCell>
                    <TableCell> <Button variant={"contained"} onClick={onBackPressed}>لغو</Button> </TableCell>

                </Table>
            </TableContainer>
        </div>
    );
};

export default UserEdit;