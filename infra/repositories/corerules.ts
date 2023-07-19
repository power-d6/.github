import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

export const repository = new github.Repository("corerulesRepository", {
    allowMergeCommit: false,
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

export const mainBranch = new github.Branch("corerulesRepositoryMainBranch", {
    repository: repository.name,
    branch: "main"
}, {
    protect: true,
});

export const defaultBranchRule = new github.BranchDefault("corerulesRepositoryDefaultBranch", {
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