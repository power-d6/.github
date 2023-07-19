import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";
import * as gandi from "@pulumiverse/gandi";

export const repository = new github.Repository("specificationRepository", {
    allowMergeCommit: false,
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

export const mainBranch = new github.Branch("specificationRepositoryMainBranch", {
    repository: repository.name,
    branch: "main"
}, {
    protect: true,
});

export const defaultBranchRule = new github.BranchDefault("specificationRepositoryDefaultBranch", {
    repository: repository.name,
    branch: mainBranch.branch,
}, {
    protect: true,
});

export const TXT_githubpageschallengepowerd6specificationDnsRecord = new gandi.livedns.Record("TXT_githubpageschallengepowerd6specificationDnsRecord", {
    name: "_github-pages-challenge-powerd6.specification",
    ttl: 10800,
    type: "TXT",
    values: ["\"c0ff5e26529a675386942853f550d8\""],
    zone: "powerd6.org",
}, {
    protect: true,
});

export const CNAME_specificationDnsRecord = new gandi.livedns.Record("CNAME_specificationDnsRecord", {
    name: "specification",
    ttl: 10800,
    type: "CNAME",
    values: ["powerd6.github.io."],
    zone: "powerd6.org",
}, {
    protect: true,
});

export const output = {
    repository: repository.name,
    mainBranch: mainBranch.branch,
    defaultBranchRule: defaultBranchRule.branch,
    githubPages: [
        TXT_githubpageschallengepowerd6specificationDnsRecord.href,
        CNAME_specificationDnsRecord.href,
    ]
}