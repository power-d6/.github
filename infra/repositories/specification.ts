import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

export const specificationRepository = new github.Repository("specificationRepository", {
    allowMergeCommit: false,
    defaultBranch: "main",
    deleteBranchOnMerge: true,
    description: "The open specification for the powerd6 system and tools",
    hasDownloads: true,
    hasIssues: true,
    name: "specification",
    pages: {
        cname: "specification.powerd6.org",
        source: {
            branch: "main",
        },
    },
    topics: [
        "specification",
        "json-schema",
        "developer-tools",
    ],
    visibility: "public",
    vulnerabilityAlerts: true,
}, {
    protect: true,
});
