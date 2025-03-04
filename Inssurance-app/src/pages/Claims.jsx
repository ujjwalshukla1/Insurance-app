import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeClaim } from "../slice/claimSlice.js";
import { toast } from "react-toastify";

const Claims = () => {
  const claims = useSelector((state) => state.claims);
  const user = useSelector((state) => state.user);
  const dispatchEvent = useDispatch();
  const userClaims = claims.filter((claim) => claim.userId === user?.id);
  const handleRemoveClaim = (claimId) => {
    dispatchEvent(removeClaim(claimId));
    toast.error("Claim removed successfully.");
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Claims</h2>
      {userClaims.length > 0 ? (
        userClaims.map((claim) => (
          <div key={claim.id} className="border p-4 mb-2">
            <h3 className="text-lg font-semibold">{claim.policyName}</h3>
            <p>Status: {claim.status}</p>
            <button className="bg-red-600 text-white px-3 py-1 mt-3 rounded" onClick={() => handleRemoveClaim(claim.id)}>
              Remove Claim
            </button>
          </div>
        ))
      ) : (
        <p>No claims found.</p>
      )}
    </div>
  );
};

export default Claims;
