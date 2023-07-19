import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

import { commonRepositoryConfig } from "./_common";

export const repository = new github.Repository("githubRepository", {
    ...commonRepositoryConfig,
    name: ".github",
    description: "The location for shared artefacts, actions and documents for the entire organisation",
    topics: [
        "github-actions",
        "contributing",
        "code-of-conduct",
        "profile",
    ],
}, {
    protect: true,
});

export const mainBranch = new github.Branch("githubRepositoryMainBranch", {
    repository: repository.name,
    branch: "main"
}, {
    protect: true,
});

export const defaultBranchRule = new github.BranchDefault("githubRepositoryDefaultBranch", {
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