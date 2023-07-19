import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

export const repository = new github.Repository("landingpageRepository", {
    allowMergeCommit: false,
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

export const mainBranch = new github.Branch("landingpageRepositoryMainBranch", {
    repository: repository.name,
    branch: "main"
}, {
    protect: true,
});

export const defaultBranchRule = new github.BranchDefault("landingpageRepositoryDefaultBranch", {
    repository: repository.name,
    branch: mainBranch.branch,
}, {
    protect: true,
});


export const output = {
    repository: repository.name,
    mainBranch: mainBranch.branch,
    defaultBranchRule: defaultBranchRule.branch,
}