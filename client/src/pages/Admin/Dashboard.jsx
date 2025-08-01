import React, { useContext, useEffect, useState } from 'react'
import { useUserAuth } from '../../hooks/useUserAuth'
import { UserContext } from '../../context/userContext'
import Dashboardlayout from '../../components/layouts/Dashboardlayout'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../utils/axiosInstance'
import { API_PATHS } from '../../utils/apiPaths'
import moment from 'moment'
import InfoCard from '../../components/Cards/InfoCard'
import { addThousandsSeperator } from '../../utils/helper'
import { LuArrowRight } from 'react-icons/lu'
import TaskListTable from '../../components/TaskListTable'
import CustomBarChart from '../../components/Charts/CustomBarChart'

const COLORS = ["#8D51FF","00BBDB","7BCE00"];

const Dashboard = () => {
  useUserAuth()

  const {user} = useContext(UserContext)

  const navigate = useNavigate()

  const [dashboardData,setDashboardData] = useState(null);
  const [pieChartData,setPieChartData] = useState([]);
  const [barChartData,setBarChartData] = useState([]);

  // Prepare Chart Data
  const prepareChartData = (data) => {
    const taskDistribution = data?.taskDistribution || null;
    const taskPriorityLevels = data?.taskPriorityLevels || null;

    const taskDistributionData = [
      { status: "Pending" , count: taskDistribution?.Pending || 0 },
      { status: "In Progress" , count: taskDistribution?.Pending || 0 },
      { status: "Completed" , count: taskDistribution?.Pending || 0 },
    ];

    setPieChartData(taskDistributionData);

    const PriorityLevelData = [
      { priority: "Low" , count: taskPriorityLevels?.Low || 0 },
      { priority: "Medium" , count: taskPriorityLevels?.Medium || 0 },
      { priority: "High" , count: taskPriorityLevels?.High || 0 },
    ];

    setBarChartData(PriorityLevelData);
  };

  const getDashboardData = async () => {
    try {
      const response = await axiosInstance.get(
        API_PATHS.TASKS.GET_DASHBOARD_DATA
      );
      if(response.data){
        setDashboardData(response.data);
        prepareChartData(response.data?.charts || null)
      }
    } catch (error) {
      console.log("Error fetching users:",error);
    }
  };

  const onSeeMore = () => {
    navigate('/admin/tasks')
  }

  useEffect(() => {
    getDashboardData();
  
    return () => {}
  }, [])
  

  return (
    <Dashboardlayout activeMenu="Dashboard">
      <div className="card my-5">
        <div>
          <div className="col-span-3">
            <h2 className="text-xl md:text-2xl">Good Morning! {user?.name}</h2>
            <p className='text-xs md:text-[13px] text-gray-400 mt-1.5'>
              {moment().format("dddd Do MMM YYYY")}
            </p>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-4 md:my-6'>

          {/* Removed Task Distribution Chart */}

              <div>
            <div className="card">
            <div className="flex items-center justify-between">
              <h5 className='font-medium'>Task Priority Levels</h5>
              </div>

              <CustomBarChart data={barChartData} />
              </div>
              </div>

          <div className='md:col-span-2'>
              <div className='card'>
                <div className="flex items-center justify-between">
                  <h5 className='text-lg'>Recent Tasks</h5>

                  <button className='card-btn' onClick={onSeeMore}>
                    See All <LuArrowRight className='text-base' />
                  </button>
                </div>

                <TaskListTable tableData={dashboardData?.recentTasks || []} />
              </div>
          </div>
      </div>
    </Dashboardlayout>
  )
}

export default Dashboard