import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addClaim } from "../slice/claimSlice.js";
import { fetchPolicies } from "../slice/policySlice.js";
import { toast } from "react-toastify";


const Policies = () => {
  const policies = useSelector((state) => state.policies);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPolicies());
  }, [dispatch]);

  const handlePurchase = (policy) => {
    window.confirm("Are you sure you want to purchase this policy?");
    if (!user) {
      toast.error("Please login to purchase a policy.");
      return;
    }
    if (user) {
      const newClaim = {
        id: Date.now(),
        policyId: policy.id,
        policyName: policy.name,
        userId: user.id,
        status: "Pending",
      };
      dispatch(addClaim(newClaim));
      toast.success("Policy purchased successfully.");
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
            <p className="mb-1">Price: ${policy.price}</p>
            <Link to={`/policies/${policy.id}`} className="bg-blue-600 px-3 py-2 rounded text-white">
              View Details
            </Link>
            {user && (
              <button
                onClick={() => handlePurchase(policy)}
                className="ml-4 bg-green-500 px-3 py-2 rounded mt-2 text-white"
              >
                Purchase Policy
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
