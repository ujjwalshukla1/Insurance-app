import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeClaim, updateClaimStatus } from "../slice/claimSlice.js"; 
import { toast } from "react-toastify";

const Purchase = () => {
  const dispatch = useDispatch();
  const claims = useSelector((state) => state.claims);
  const user = useSelector((state) => state.user);

  if (!user) {
    return <p>Please log in to view your claims.</p>;
  }

  const userClaims = claims.filter((claim) => claim.userId === user.id);
  const purchasedPolicies = userClaims.filter((claim) => claim.status === "Pending");
  const filedClaims = userClaims.filter((claim) => claim.status === "Filed");

  const handleRemoveClaim = (claimId) => {
    dispatch(removeClaim(claimId));
    toast.error("Policy removed.");
  };

  const handleFileClaim = (claimId) => {
    dispatch(updateClaimStatus({ claimId, status: "Filed" }));
    toast.success("Claim successfully filed!");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Claims</h2>

      <h3 className="text-lg font-semibold mt-4">Purchased Policies</h3>
      {purchasedPolicies.length > 0 ? (
        purchasedPolicies.map((claim) => (
          <div key={claim.id} className="border p-4 mb-2">
            <h3 className="text-lg font-semibold">{claim.policyName}</h3>
            <p>Status: {claim.status}</p>
            <button
              className="bg-red-600 text-white px-3 py-1 mt-3 rounded"
              onClick={() => handleRemoveClaim(claim.id)}
            >
              Remove Policy
            </button>
            <button
              className="bg-green-600 text-white px-3 ml-2 py-1 mt-3 rounded"
              onClick={() => handleFileClaim(claim.id)}
            >
              File Claim
            </button>
          </div>
        ))
      ) : (
        <p>No purchased policies.</p>
      )}

      <h3 className="text-lg font-semibold mt-4">Filed Claims</h3>
      {filedClaims.length > 0 ? (
        filedClaims.map((claim) => (
          <div key={claim.id} className="border p-4 mb-2 bg-gray-100">
            <h3 className="text-lg font-semibold">{claim.policyName}</h3>
            <p>Status: {claim.status} (Under Review)</p>
          </div>
        ))
      ) : (
        <p>No filed claims.</p>
      )}
    </div>
  );
};

export default Purchase;
