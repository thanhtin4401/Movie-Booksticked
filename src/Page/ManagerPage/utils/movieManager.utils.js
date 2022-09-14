export const columns = [
  {
    title: "Hình ảnh",
    dataIndex: "hinhAnh",
    key: "hinhAnh",
    render: (text, record) => {
      return <img className="" src={record.hinhAnh} />;
    },
  },
  {
    title: "Tên phim",
    dataIndex: "tenPhim",
    key: "tenPhim",
  },
  {
    title: "Đánh giá",
    dataIndex: "danhGia",
    key: "danhGia",
  },
  {
    title: "Mô tả",
    dataIndex: "moTa",
    key: "moTa",
  },
  {
    title: "Thao tác",
    dataIndex: "action",
    key: "acion",
  },
];
