import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

import { commonRepositoryConfig, createDefaultBranch } from "./_common";

export const repository = new github.Repository("corerulesRepository", {
    ...commonRepositoryConfig,
    name: "core-rules",
    description: "The basic set of rules for the powerd6 system",
}, {
    protect: true,
});

const {mainBranch, defaultBranchRule} = createDefaultBranch("corerulesRepository", repository);

export const output = {
    repository: repository.name,
    mainBranch: mainBranch.branch,
    defaultBranchRule: defaultBranchRule.branch,
}