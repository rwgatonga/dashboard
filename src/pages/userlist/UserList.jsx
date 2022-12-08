import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function UserList() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
      field: 'user',
      headerName: 'Username',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
    },
    {
      field: 'transaction',
      headerName: 'Transaction Volume',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button className="userListEdit">Edit</button>
            <DeleteOutlineIcon className="userListDelete" />
          </>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      username: 'John Snow',
      avatar:
        'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      email: 'joesnow@yahoo.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 2,
      username: 'John Snow',
      avatar:
        'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      email: 'joesnow@yahoo.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 3,
      username: 'John Snow',
      avatar:
        'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      email: 'joesnow@yahoo.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 4,
      username: 'John Snow',
      avatar:
        'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      email: 'joesnow@yahoo.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 5,
      username: 'John Snow',
      avatar:
        'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      email: 'joesnow@yahoo.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 6,
      username: 'John Snow',
      avatar:
        'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      email: 'joesnow@yahoo.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 7,
      username: 'John Snow',
      avatar:
        'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      email: 'joesnow@yahoo.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 8,
      username: 'John Snow',
      avatar:
        'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      email: 'joesnow@yahoo.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 9,
      username: 'John Snow',
      avatar:
        'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      email: 'joesnow@yahoo.com',
      status: 'active',
      transaction: '$120.00',
    },
    {
      id: 10,
      username: 'John Snow',
      avatar:
        'https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      email: 'joesnow@yahoo.com',
      status: 'active',
      transaction: '$120.00',
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={rows} disableSelectionOnClick
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
