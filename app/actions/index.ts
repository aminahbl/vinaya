"use server";

import { getXataClient } from "@xata";

const xata = getXataClient();

export async function getProofOfConceptData() {
  return await xata.db.rules.getFirst();
}


// import { useState, useEffect } from 'react';
// import { getXataClient } from './xata';  // Import the Xata client

// export function useRuleMap() {
//   const [ruleMap, setRuleMap] = useState(new Map());

//   useEffect(() => {
//     async function fetchRules() {
//       const xata = getXataClient();  // Initialize the Xata client
//       const allRules = await xata.db.rules.getAll();

//       // Store the rules in a Map
//       const map = new Map();
//       allRules.forEach(rule => {
//         map.set(rule.id, rule.tradition);
//       });

//       setRuleMap(map);
//     }

//     fetchRules();
//   }, []);

//   return ruleMap;
// }


// export async function getTraditionsWithParallelToRule(ruleId: any) {
//   const xata = getXataClient(); // Initialize the Xata client

//   // Query the rule_parallels table for entries where ruleId or parallelRuleId matches the specific ruleId
//   const parallels = await xata.db.rule_parallels.getMany({
//     filter: {
//       $or: [{ ruleId }, { parallelRuleId: ruleId }],
//     },
//   });

//   // Get all the rules and store them in a Map
//   const allRules = await xata.db.rules.getAll();
//   const ruleMap = new Map();
//   allRules.forEach((rule) => {
//     ruleMap.set(rule.id, rule.tradition);
//   });

//   // For each parallel, find the tradition associated with ruleId or parallelRuleId
//   const traditions = parallels.map((parallel) => {
//     if (parallel.ruleId === ruleId) {
//       return ruleMap.get(parallel.parallelRuleId);
//     } else {
//       return ruleMap.get(parallel.ruleId);
//     }
//   });

//   return traditions;
// }
