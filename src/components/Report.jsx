import React from "react";

export default function Report({ item }) {

  return (
    <tr className="border-y border-grey">
      <td>{item.created}</td>
      <td>
        {item.first} {item.last} <br/>
        {item.email}
      </td>
      <td>{item.type}</td>
      <td>{item.risk || "Not calculated"}</td>
      <td>{item.status === "Approved" ? "✅" : item.status === "Cancelled" ? "❌" : "..."} {item.status}</td>
    </tr>
  );
}
