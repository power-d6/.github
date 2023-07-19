import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

import { commonRepositoryConfig } from "./_common";

export const repository = new github.Repository("corerulesRepository", {
    ...commonRepositoryConfig,
    name: "core-rules",
    description: "The basic set of rules for the powerd6 system",
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