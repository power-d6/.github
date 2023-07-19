import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

import { commonRepositoryConfig, createDefaultBranch } from "./_common";

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


const {mainBranch, defaultBranchRule} = createDefaultBranch("toolsRepository", repository);


export const output = {
    repository: repository.name,
    mainBranch: mainBranch.branch,
    defaultBranchRule: defaultBranchRule.branch,
}