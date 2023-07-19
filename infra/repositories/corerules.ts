import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

import { commonRepositoryConfig, createDefaultBranch, createLabels } from "./_common";

export const repository = new github.Repository("corerulesRepository", {
    ...commonRepositoryConfig,
    name: "core-rules",
    description: "The basic set of rules for the powerd6 system",
}, {
    protect: true,
});

const { mainBranch, mainBranchProtection, defaultBranchRule } = createDefaultBranch("corerulesRepository", repository);
const { labels } = createLabels("corerulesRepository", repository);

export const output = {
    repository: repository.name,
    mainBranch: mainBranch.branch,
    mainBranchProtection: mainBranchProtection.id,
    defaultBranchRule: defaultBranchRule.branch,
    labels: labels.map(l => l.name),
}