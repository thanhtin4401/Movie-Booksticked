import { Space, Table, Tag } from 'antd';

export const columns = [
    {
      title: 'Tài Khoản',
      dataIndex: 'taiKhoan',
      key: 'taiKhoan',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Họ Tên',
      dataIndex: 'hoTen',
      key: 'hoTen',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Số Điện Thoại',
      dataIndex: 'soDT',
      key: 'soDT',
    },
    {
      title: 'Mật Khẩu',
      dataIndex: 'matKhau',
      key: 'matKhau',
    },
    {
      title: 'Mã Loại Người Dùng',
      dataIndex: 'maLoaiNguoiDung',
      key: 'maLoaiNguoiDung',
      render : (text) => { 
         if(text == "QuanTri"){
            return <Tag color={"red"}>Quản Trị</Tag>
         }else{
            return <Tag color={"green"}>Khách Hàng</Tag>
         }
       }
    },
    {
        title: 'Thao Tác',
        dataIndex: 'action',
        key: 'action',
    },
  ];