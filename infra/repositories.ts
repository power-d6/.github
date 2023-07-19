import * as github from "@pulumi/github";

import yaml = require('js-yaml');
import fs = require('fs');

interface Repository {
    name: string,
    description: string,
    pagesCname?: string,
    topics: string[],
}

type createdRepository = {
    repository: github.Repository;
    mainBranch: github.Branch;
    repositoryDefaultBranch: github.BranchDefault;
};

export const repositories: Repository[] = yaml.load(fs.readFileSync(`./config/repositories.yaml`, "utf8")) as Repository[];

export function createRepository(repositoryConfig: Repository): createdRepository {
    const repository = new github.Repository(`${repositoryConfig.name}Repository`, {
        name: repositoryConfig.name,
        description: repositoryConfig.description,
        topics: repositoryConfig.topics,
        pages: repositoryConfig.pagesCname ? {
            cname: repositoryConfig.pagesCname,
            source: {
                branch: "main",
            },
        } : undefined,

        allowMergeCommit: false,
        deleteBranchOnMerge: true,
        hasDownloads: true,
        hasIssues: true,
        visibility: "public",
        vulnerabilityAlerts: true,
    }, {
        protect: true,
    });

    const mainBranch = new github.Branch(`${repositoryConfig.name}MainBranch`, {
        branch: "main",
        repository: repository.name,

    }, {
        protect: true,
    });

    const repositoryDefaultBranch = new github.BranchDefault(`${repositoryConfig.name}DefaultBranch`, {
        branch: mainBranch.branch,
        repository: repository.name,
    }, {
        protect: true,
    });

    return {
        repository,
        mainBranch,
        repositoryDefaultBranch,
    }
}