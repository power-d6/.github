import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

export const toolsRepository = new github.Repository("toolsRepository", {
    allowMergeCommit: false,
    defaultBranch: "main",
    deleteBranchOnMerge: true,
    description: "A collection of tools to support the creation of the powerd6 system ",
    hasDownloads: true,
    hasIssues: true,
    name: "tools",
    topics: [
        "cli",
        "developer-tools",
    ],
    visibility: "public",
    vulnerabilityAlerts: true,
}, {
    protect: true,
});
