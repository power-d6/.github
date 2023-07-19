import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

export const repository = new github.Repository("specificationRepository", {
    allowMergeCommit: false,
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

export const mainBranch = new github.Branch("specificationRepositoryMainBranch", {
    repository: repository.name,
    branch: "main"
}, {
    protect: true,
});

export const defaultBranchRule = new github.BranchDefault("specificationRepositoryDefaultBranch", {
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