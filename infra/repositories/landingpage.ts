import * as pulumi from "@pulumi/pulumi";
import * as github from "@pulumi/github";

import { commonRepositoryConfig, createDefaultBranch, createLabels } from "./_common";
import * as gandi from "@pulumiverse/gandi";

export const repository = new github.Repository("landingpageRepository", {
    ...commonRepositoryConfig,
    name: "landing-page",
    description: "The landing page of the project",
    topics: [
        "website",
        "landing-page",
    ],
    homepageUrl: "https://powerd6.org",
    pages: {
        cname: "powerd6.org",
        source: {
            branch: "main",
        },
    },
}, {
    protect: true,
});

const {mainBranch, mainBranchProtection, defaultBranchRule} = createDefaultBranch("landingpageRepository", repository);
const {labels} = createLabels("landingpageRepository", repository);

export const TXT_githubpageschallengepowerd6DnsRecord = new gandi.livedns.Record("TXT_githubpageschallengepowerd6DnsRecord", {
    name: "_github-pages-challenge-powerd6",
    ttl: 10800,
    type: "TXT",
    values: ["\"0fff03dd80f06accdca1457d1a710f\""],
    zone: "powerd6.org",
}, {
    protect: true,
});

export const CNAME_wwwDnsRecord = new gandi.livedns.Record("CNAME_wwwDnsRecord", {
    name: "www",
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
    mainBranchProtection: mainBranchProtection.id,
    defaultBranchRule: defaultBranchRule.branch,
    labels: labels.map(l=>l.name),
    githubPages: [
        TXT_githubpageschallengepowerd6DnsRecord.href,
        CNAME_wwwDnsRecord.href,
    ]
}