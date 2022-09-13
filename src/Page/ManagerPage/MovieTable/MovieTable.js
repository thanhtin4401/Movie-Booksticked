import React, { useState, useEffect } from "react";

import MovieAction from "./MovieAction";
import { Table } from "antd";
import { columns } from "../utils/movieManager.utils";
import { movieService } from "../../../Services/movie.service";
function MovieTable() {
  const [dataUser, setDataUser] = useState([]);
  useEffect(() => {
    let fetchListUser = () => {
      movieService
        .getMovieList()
        .then((res) => {
          let movieList = res.data.content.map((movie, index) => {
            return {
              key: index,
              ...movie,
              action: (
                <MovieAction
                  key={index}
                  //   account={user.taiKhoan}
                  onSuccess={fetchListUser}
                />
              ),
            };
          });
          setDataUser(movieList);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchListUser();
  }, []);

  return (
    <Table
      onRow={() => {
        return {
          onClick: (event) => {
            console.log(event);
          }, // click row
        };
      }}
      columns={columns}
      dataSource={dataUser}
    />
  );
}

export default MovieTable;
