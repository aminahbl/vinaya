"use server";

import { getXataClient } from "@xata";

const xata = getXataClient();

export async function getProofOfConceptData() {
  return await xata.db.pli_tv_pm_bi_rules.getFirst();
}
