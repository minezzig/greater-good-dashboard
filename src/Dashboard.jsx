import React from 'react'
import Chart from "./components/Chart"
import Reports from "./components/Reports"

export default function Dashboard() {
  return (
    <div className="bg-white shadow-md w-full  min-w-[800px]">
        <div className="p-3">
            <h2 className="text-lg">KYC Application Reports</h2>
            <Chart />
        </div>
        <Reports />
    </div>
  )
}
