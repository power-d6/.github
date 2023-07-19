import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

export const githubRepository = new github.Repository("githubRepository", {
    allowMergeCommit: false,
    defaultBranch: "main",
    deleteBranchOnMerge: true,
    description: "The location for shared artefacts, actions and documents for the entire organisation",
    hasDownloads: true,
    hasIssues: true,
    name: ".github",
    topics: [
        "github-actions",
        "contributing",
        "code-of-conduct",
        "profile",
    ],
    visibility: "public",
    vulnerabilityAlerts: true,
}, {
    protect: true,
});
