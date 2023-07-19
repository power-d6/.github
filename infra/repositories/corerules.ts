import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

export const corerulesRepository = new github.Repository("corerulesRepository", {
    allowMergeCommit: false,
    defaultBranch: "main",
    deleteBranchOnMerge: true,
    description: "The basic set of rules for the powerd6 system",
    hasDownloads: true,
    hasIssues: true,
    name: "core-rules",
    visibility: "public",
    vulnerabilityAlerts: true,
}, {
    protect: true,
});
