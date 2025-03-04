import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addClaim } from "../slice/claimSlice.js";
import { fetchPolicies } from "../slice/PolicySlice.js";


const Policies = () => {
  const policies = useSelector((state) => state.policies);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPolicies());
  }, [dispatch]);

  const handleClaim = (policy) => {
    if (user) {
      const newClaim = {
        id: Date.now(),
        policyId: policy.id,
        policyName: policy.name,
        userId: user.id,
        status: "Pending",
      };
      dispatch(addClaim(newClaim));
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Available Policies</h2>
      {policies.length > 0 ? (
        policies.map((policy) => (
          <div key={policy.id} className="border p-4 mb-2">
            <h3 className="text-lg font-semibold">{policy.name}</h3>
            <p>Coverage: {policy.coverage}</p>
            <p>Price: ${policy.price}</p>
            <Link to={`/policies/${policy.id}`} className="text-blue-600">
              View Details
            </Link>
            {user && (
              <button
                onClick={() => handleClaim(policy)}
                className="ml-4 bg-green-500 px-3 py-1 rounded text-white"
              >
                File a Claim
              </button>
            )}
          </div>
        ))
      ) : (
        <p>No policies found.</p>
      )}
    </div>
  );
};

export default Policies;
