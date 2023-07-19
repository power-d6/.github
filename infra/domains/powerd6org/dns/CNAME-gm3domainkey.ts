import * as pulumi from "@pulumi/pulumi";
import * as gandi from "@pulumiverse/gandi";

const CNAME_gm3domainkeyDnsRecord = new gandi.livedns.Record("CNAME-gm3domainkeyDnsRecord", {
    name: "gm3._domainkey",
    ttl: 10800,
    type: "CNAME",
    values: ["gm3.gandimail.net."],
    zone: "powerd6.org",
}, {
    protect: true,
});
