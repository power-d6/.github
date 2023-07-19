import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

import { commonRepositoryConfig, createDefaultBranch } from "./_common";

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

const {mainBranch, defaultBranchRule} = createDefaultBranch("githubRepository", repository);


export const output = {
    repository: repository.name,
    mainBranch: mainBranch.branch,
    defaultBranchRule: defaultBranchRule.branch,
}