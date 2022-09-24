import { Tag } from "antd";
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
    // width: "20%",
    width: 100,
  },
  {
    title: "Bí danh",
    dataIndex: "biDanh",
    key: "biDanh",
    width: "10%",
  },
  // {
  //   title: "Trailer",
  //   dataIndex: "trailer",
  //   key: "trailer",

  //   width: 100,
  // },
  {
    title: "Ngày chiếu",
    dataIndex: "ngayKhoiChieu",
    key: "ngayKhoiChieu",
  },
  {
    title: "Sắp chiếu",
    dataIndex: "sapChieu",
    key: "sapChieu",
    render: (text) => {
      if (text === true) {
        return <Tag color={"blue"}>true</Tag>;
      } else {
        return <Tag color={"red"}>false</Tag>;
      }
    },
  },
  {
    title: "Đang chiếu",
    dataIndex: "dangChieu",
    key: "dangChieu",
    render: (text) => {
      if (text === true) {
        return <Tag color={"blue"}>true</Tag>;
      } else {
        return <Tag color={"red"}>false</Tag>;
      }
    },
  },
  {
    title: "Hot",
    dataIndex: "hot",
    key: "hot",
    render: (text) => {
      if (text === true) {
        return <Tag color={"blue"}>true</Tag>;
      } else {
        return <Tag color={"red"}>false</Tag>;
      }
    },
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
    width: 400,
  },
  {
    title: "Thao tác",
    dataIndex: "action",
    key: "acion",
  },
];
