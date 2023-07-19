import * as pulumi from "@pulumi/pulumi";
import * as gandi from "@pulumiverse/gandi";

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
