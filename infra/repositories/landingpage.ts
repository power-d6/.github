import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

export const landingpageRepository = new github.Repository("landingpageRepository", {
    allowMergeCommit: false,
    defaultBranch: "main",
    deleteBranchOnMerge: true,
    description: "The landing page of the project",
    hasDownloads: true,
    hasIssues: true,
    name: "landing-page",
    pages: {
        cname: "powerd6.org",
        source: {
            branch: "main",
        },
    },
    topics: [
        "website",
        "landing-page",
    ],
    visibility: "public",
    vulnerabilityAlerts: true,
}, {
    protect: true,
});
