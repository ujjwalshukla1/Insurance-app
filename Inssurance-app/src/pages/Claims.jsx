import React from "react";
import { useSelector } from "react-redux";

const Claims = () => {
  const claims = useSelector(state => state.claims);
  const user = useSelector(state => state.user);

  const userClaims = claims.filter(claim => claim.userId === user?.id);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Claims</h2>
      {userClaims.length > 0 ? (
        userClaims.map(claim => (
          <div key={claim.id} className="border p-4 mb-2">
            <h3 className="text-lg font-semibold">{claim.policyName}</h3>
            <p>Status: {claim.status}</p>
          </div>
        ))
      ) : (
        <p>No claims found.</p>
      )}
    </div>
  );
};

export default Claims;