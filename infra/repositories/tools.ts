import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

import { commonRepositoryConfig } from "./_common";

export const repository = new github.Repository("toolsRepository", {
    allowMergeCommit: false,
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

export const mainBranch = new github.Branch("toolsRepositoryMainBranch", {
    repository: repository.name,
    branch: "main"
}, {
    protect: true,
});

export const defaultBranchRule = new github.BranchDefault("toolsRepositoryDefaultBranch", {
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