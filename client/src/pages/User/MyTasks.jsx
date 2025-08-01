import React, { useEffect, useState } from 'react'
import Dashboardlayout from '../../components/layouts/Dashboardlayout'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../utils/axiosInstance';
import { API_PATHS } from '../../utils/apiPaths';
import { LuFileSpreadsheet } from 'react-icons/lu';
import TaskStatusTabs from '../../components/TaskStatusTabs';
import TaskCard from '../../components/Cards/TaskCard';

const MyTasks = () => {

  const [allTasks,setAllTasks] = useState([]);
  const [tabs,setTabs] = useState([]);
  const [filterStatus,setFilterStatus] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5); // 5 tasks per page
  const [totalTasks, setTotalTasks] = useState(0);

  const navigate = useNavigate();

  const getAllTasks = async () => {
    try {
      const response = await axiosInstance.get(API_PATHS.TASKS.GET_ALL_TASKS, {
        params : {
          status: filterStatus === "All" ? "" : filterStatus,
          page: currentPage,
          pageSize: pageSize,
        },
      });

      setAllTasks(response.data?.tasks?.length > 0 ? response.data.tasks : []);
      setTotalTasks(response.data?.totalTasks || 0);

      // Map statusSummary data with fixed labels and order
      const statusSummary = response.data?.statusSummary || {};

      const statusArray = [
        { label: "All", count: statusSummary.allTasks || 0 },
        { label: "Pending", count: statusSummary.pendingTasks || 0 },
        { label: "In Progress", count: statusSummary.inProgressTasks || 0 },
        { label: "Completed", count: statusSummary.completedTasks || 0 },
      ];

      setTabs(statusArray);
    } catch (error) {
      console.log("Error fetching users:", error);
    }
  };

  const handleClick = (taskId) => {
    navigate(`/user/task-details/${taskId}`);
  };

  useEffect(()=>{
    getAllTasks(filterStatus);
    return () => {};
  }, [filterStatus, currentPage]);

  return (
    <Dashboardlayout activeMenu="My Tasks">
      <div className="my-5">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between">
            <h2 className='text-xl md:text-xl font-medium'>My Tasks</h2>

          {tabs?.[0]?.count > 0 && (
              <TaskStatusTabs tabs={tabs} activeTab={filterStatus} setActiveTab={setFilterStatus} />
          )}

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {allTasks?.map((item,index) => (
            <TaskCard
              key={item._id} title={item.title} description={item.description} priority={item.priority} status={item.status} progress={item.progress} createdAt={item.createdAt} dueDate={item.dueDate} attachmentCount={item.attachments?.length || 0} completedTodoCount={item.completedTasks || 0} todoChecklist={item.todoChecklist || []} onClick={() => {
                handleClick(item._id);
              }}
              />
          ))}
        </div>

        {/* Pagination Controls */}
        {totalTasks > pageSize && (
          <div className="flex justify-center items-center mt-6 gap-4">
            <button
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            <span>
              Page {currentPage} of {Math.ceil(totalTasks / pageSize)}
            </span>
            <button
              className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={currentPage >= Math.ceil(totalTasks / pageSize)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </Dashboardlayout>
  )
}

export default MyTasks