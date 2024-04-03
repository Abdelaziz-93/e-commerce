
import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';

export default function Users() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${window.location.origin}/customers/users`)
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <Sidebar />
        <div className="col-md-10">
          <div className="text-center my-5">
            <h2>USERS</h2>
          </div>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="py-3 ps-2">Name</th>
                  <th className="py-3 ps-2">Email</th>
                  <th className="py-3 ps-2">Role</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <tr key={index}>
                    <td className="py-4 ps-2">{`${user.first_name} ${user.last_name}`}</td>
                    <td className="py-4 ps-2">{user.email}</td>
                    <td className="py-4 ps-2">{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}


