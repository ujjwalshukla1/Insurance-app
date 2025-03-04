import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PolicyDetail = () => {
  const { id } = useParams();
  const policy = useSelector(state => state.policies.find(p => p.id.toString() === id));


  if (!policy) return <p>Policy not found.</p>;

  return (
    <div>
      <h2 className="text-xl font-bold">{policy.name}</h2>
      <p>Coverage: {policy.coverage}</p>
      <p>Price: ${policy.price}</p>
      <p>Description: {policy.description}</p>
    </div>
  );
};

export default PolicyDetail;