import * as pulumi from "@pulumi/pulumi";
import * as gandi from "@pulumiverse/gandi";

export const A_atDnsRecord = new gandi.livedns.Record("A-atDnsRecord", {
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

export const AAAA_atDnsRecord = new gandi.livedns.Record("AAAA-atDnsRecord", {
    name: "@",
    ttl: 3600,
    type: "AAAA",
    values: [
        "2606:50c0:8000::153",
        "2606:50c0:8003::153",
        "2606:50c0:8002::153",
        "2606:50c0:8001::153",
    ],
    zone: "powerd6.org",
}, {
    protect: true,
});