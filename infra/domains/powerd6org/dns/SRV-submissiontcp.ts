import * as pulumi from "@pulumi/pulumi";
import * as gandi from "@pulumiverse/gandi";

const SRV_submissiontcpDnsRecord = new gandi.livedns.Record("SRV-submissiontcpDnsRecord", {
    name: "_submission._tcp",
    ttl: 10800,
    type: "SRV",
    values: ["0 1 465 mail.gandi.net."],
    zone: "powerd6.org",
}, {
    protect: true,
});
