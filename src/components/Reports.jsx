import React from "react";
import data from "../../data.json";
import Report from "./Report";

export default function Reports() {
  return (
    <div className="p-1">
      <table className="w-full text-sm">
        <thead>
          <tr>
            <th className="text-left">Created</th>
            <th className="text-left">Name</th>
            <th className="text-left">Type</th>
            <th className="text-left">Risk Score</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <Report item={item} key={i}/>
          ))}
        </tbody>
      </table>
    </div>
  );
}
