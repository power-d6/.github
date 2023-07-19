import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

import { commonRepositoryConfig, createDefaultBranch, createLabels } from "./_common";

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


const { mainBranch, mainBranchProtection, defaultBranchRule } = createDefaultBranch("toolsRepository", repository);
const { labels } = createLabels("toolsRepository", repository);


export const output = {
    repository: repository.name,
    mainBranch: mainBranch.branch,
    mainBranchProtection: mainBranchProtection.id,
    defaultBranchRule: defaultBranchRule.branch,
    labels: labels.map(l => l.name),
}