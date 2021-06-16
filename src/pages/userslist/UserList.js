import { Grid, IconButton } from '@material-ui/core';
import { Edit as EditIcon, Person as PersonIcon } from '@material-ui/icons';
import MUIDataTable from 'mui-datatables';
import * as React from 'react';
import PageTitle from "../../components/PageTitle/PageTitle";
import UserItem from "./UserItem";
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import DescriptionIcon from '@material-ui/icons/Description';
import ReportIcon from '@material-ui/icons/Report';



const users = [{
    id: '1',
    name: "علیرضا",
    lastName: "شاهرخی",
    SN: "062356258",
    phone: '09153124582',
    email: 'hoda@yahoo.com',
    address: " ساختمان پست بانک",
    Access: '1',
    totalincome: '50000'
},
{
    id: '2',
    name: "علیرضا",
    lastName: "شاهرخی",
    SN: "062356258",
    phone: '09153124582',
    email: 'hoda@yahoo.com',
    address: " ساختمان پست بانک",
    Access: '3',
    totalincome: '50000'
},
{
    id: '3',
    name: "علیرضا",
    lastName: "شاهرخی",
    SN: "062356258",
    phone: '09153124582',
    email: 'hoda@yahoo.com',
    address: " ساختمان پست بانک",
    Access: '1',
    totalincome: '50000'
},
{
    id: '4',
    name: "علیرضا",
    lastName: "شاهرخی",
    SN: "062356258",
    phone: '09153124582',
    email: 'hoda@yahoo.com',
    address: " ساختمان پست بانک",
    Access: '1',
    totalincome: '50000'
}
]

const UserList = (props) => {

    const onEditClick = (user) => {
        props.history.push({
            pathname: "/app/UserEdit",
            state: user
        })

    }
    const onPersonClick = (user) => {
        props.history.push({
            pathname: "/app/UserAccess",
            state: user
        })

    }
    const onBankClick = (user) => {
        props.history.push({
            pathname: "/app/UserBank",
            state: user
        })

    }
    const onDocumentClick = (user) => {
        props.history.push({
            pathname: "/app/onDocumentClick",
            state: user
        })

    }
    const onReportClick = (user) => {
        props.history.push({
            pathname: "/app/onReportClick",
            state: user
        })

    }


    const transform = (users) => {
        return users.map(user => {
            return [
                user.name,
                user.lastName,
                user.SN,
                user.phone,
                user.email,
                user.address,
                user.totalincome,
                user.Status,
                user.bank,
                user.document,
                user.reports,
                <UserItem users={user} key={user.id} />,
                <IconButton key={user.id} onClick={() => onEditClick(user)}><EditIcon /></IconButton>,

                <IconButton key={user.id} onClick={() => onPersonClick(user)}><PersonIcon /></IconButton>,
                <IconButton key={user.id} onClick={() => onBankClick(user)}><AccountBalanceIcon /></IconButton>,
                <IconButton key={user.id} onClick={() => onDocumentClick(user)}><DescriptionIcon /></IconButton>,
                <IconButton key={user.id} onClick={() => onReportClick(user)}><ReportIcon /></IconButton>

            ]
        })
    }


    // const [users, setUsers] = useState([]);
    // useEffect(() => {
    //     setUsers(users);
    // }, [])


    return (
        <div>
            <PageTitle title="لیست کاربران" />
            <Grid container spacing={0}>
                <Grid item xs={12} >
                    <MUIDataTable
                        title="لیست کاربران"
                        data={transform(users)}
                        users={users}
                        columns={["نام", "نام خانوادگی", "کد ملی", "ایمیل", "آدرس", "میزان دارایی کل", "دسترسی", "وضعیت", "ویرایش", "بانک", "مدارک", "گزارشات"]}


                        options={{
                            filterType: "checkbox",
                        }}

                    />
                </Grid>

            </Grid>

        </div>
    );
};

export default UserList;