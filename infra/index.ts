import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

const githubRepository = new github.Repository("githubRepository", {
    allowMergeCommit: false,
    defaultBranch: "main",
    deleteBranchOnMerge: true,
    description: "The location for shared artefacts, actions and documents for the entire organisation",
    hasDownloads: true,
    hasIssues: true,
    name: ".github",
    pages: {
        source: {
            branch: "main",
        },
    },
    topics: [
        "github-actions",
        "contributing",
        "code-of-conduct",
        "profile",
    ],
    visibility: "public",
    vulnerabilityAlerts: true,
}, {
    protect: true,
});
const landingRepository = new github.Repository("landingRepository", {
    allowMergeCommit: false,
    defaultBranch: "main",
    deleteBranchOnMerge: true,
    description: "The landing page of the project",
    hasDownloads: true,
    hasIssues: true,
    name: "landing-page",
    pages: {
        cname: "powerd6.org",
        source: {
            branch: "main",
        },
    },
    topics: [
        "website",
        "landing-page",
    ],
    visibility: "public",
    vulnerabilityAlerts: true,
}, {
    protect: true,
});
const specificationRepository = new github.Repository("specificationRepository", {
    allowMergeCommit: false,
    defaultBranch: "main",
    deleteBranchOnMerge: true,
    description: "The open specification for the powerd6 system and tools",
    hasDownloads: true,
    hasIssues: true,
    name: "specification",
    pages: {
        cname: "specification.powerd6.org",
        source: {
            branch: "main",
        },
    },
    topics: [
        "specification",
        "json-schema",
        "developer-tools",
    ],
    visibility: "public",
    vulnerabilityAlerts: true,
}, {
    protect: true,
});
const toolsRepository = new github.Repository("toolsRepository", {
    allowMergeCommit: false,
    defaultBranch: "main",
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

const coreRepository = new github.Repository("coreRepository", {
    allowMergeCommit: false,
    defaultBranch: "main",
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