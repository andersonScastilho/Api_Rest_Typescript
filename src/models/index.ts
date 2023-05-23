import { Candidate } from "./candidate";
import { Company } from "./company";
import { Job } from "./job";

Company.hasMany(Job);
Job.belongsTo(Company);

Candidate.belongsToMany(Job, {
  through: "job_candidate",
});

Job.belongsToMany(Candidate, { through: "job_candidates" });

export { Candidate, Job, Company };
