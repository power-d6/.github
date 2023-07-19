import * as pulumi from "@pulumi/pulumi";
import * as gandi from "@pulumiverse/gandi";

const A_atDnsRecord = new gandi.livedns.Record("A-atDnsRecord", {
    name: "@",
    ttl: 3600,
    type: "A",
    values: [
        "185.199.109.153",
        "185.199.111.153",
        "185.199.108.153",
        "185.199.110.153",
    ],
    zone: "powerd6.org",
}, {
    protect: true,
});
