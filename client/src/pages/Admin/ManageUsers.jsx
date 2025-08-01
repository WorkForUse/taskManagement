import React, { useEffect, useState } from 'react'
import Dashboardlayout from '../../components/layouts/Dashboardlayout'
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { LuFileSpreadsheet } from 'react-icons/lu';
import UserCard from '../../components/Cards/UserCard';

const ManageUsers = () => {

  const [allUsers, setAllUsers] = useState([]);
  const [error, setError] = useState("");

  const getAllUsers = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.USERS.GET_ALL_USERS);
      setAllUsers(response.data || []);
      setError("");
    } catch (err) {
      setError("Failed to fetch users. Please try again.");
      setAllUsers([]);
      console.log("Error fetching users:", err);
    }
  };

  // download task report
  const hanldeDownloadReport = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.REPORTS.EXPORT_USERS, {
        responseType: 'blob',
      })
      
      // Create a URL for the blob
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download","user_details.xlsx");
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.log("Error downloading expense details:", error);
      toast.error("Failed to download expense details. Please try again.");
    }
  }

  useEffect(() => {
    getAllUsers()
    return () => {}
  }, [])
  

  return (
    <Dashboardlayout activeMenu="Team Members">
      <div className='mt-5 mb-10'>
        <div className='flex md:flex-row md:items-center justify-between'>
          <h2 className='text-xl md:text-xl font-medium'>Team Members</h2>

          <button className='flex md:flex download-btn' onClick={hanldeDownloadReport}>
            <LuFileSpreadsheet className='text-lg' />
            Download Report
          </button>
        </div>

        {error && (
          <div className='text-red-500 mt-4'>{error}</div>
        )}

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
          {allUsers.length === 0 && !error ? (
            <div className='col-span-3 text-center text-gray-500'>No users found.</div>
          ) : (
            allUsers.map((user) => (
              <UserCard key={user._id} userInfo={user} />
            ))
          )}
        </div>
      </div>
    </Dashboardlayout>
  )
}

export default ManageUsers