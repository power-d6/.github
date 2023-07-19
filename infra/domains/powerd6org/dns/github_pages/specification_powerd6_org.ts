import * as pulumi from "@pulumi/pulumi";
import * as gandi from "@pulumiverse/gandi";

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
