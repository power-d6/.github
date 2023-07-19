import * as github from "@pulumi/github";

export const commonRepositoryConfig = {
    allowAutoMerge: false,
    allowMergeCommit: false,
    allowRebaseMerge: false,
    allowSquashMerge: true,
    deleteBranchOnMerge: true,

    archiveOnDestroy: true,

    hasIssues: true,
    hasProjects: false,
    hasWiki: false,
    pages: undefined,

    visibility: "public",

    vulnerabilityAlerts: true,
}

export function createDefaultBranch(repositoryName:string, repository: github.Repository) {
    const mainBranch = new github.Branch(`${repositoryName}MainBranch`, {
        repository: repository.name,
        branch: "main"
    }, {
        protect: true,
    });

    const defaultBranchRule = new github.BranchDefault(`${repositoryName}DefaultBranch`, {
        repository: repository.name,
        branch: mainBranch.branch,
    }, {
        protect: true,
    });

    return {
        mainBranch,
        defaultBranchRule,
    }
}