import React from 'react'

const InfoCard = ({icon,label,value,color}) => {
  return (
    <div className="bg-white rounded-lg shadow flex flex-col items-center justify-center p-4 min-w-[120px] min-h-[80px]">
      <div className={`w-3 h-3 ${color} rounded-full mb-2`} />
      <span className="text-lg font-bold text-black">{value}</span>
      <span className="text-xs text-gray-500 mt-1 text-center">{label}</span>
    </div>
  )
}

export default InfoCard