import * as pulumi from "@pulumi/pulumi";
import * as gandi from "@pulumiverse/gandi";

const SRV_imapstcpDnsRecord = new gandi.livedns.Record("SRV-imapstcpDnsRecord", {
    name: "_imaps._tcp",
    ttl: 10800,
    type: "SRV",
    values: ["0 1 993 mail.gandi.net."],
    zone: "powerd6.org",
}, {
    protect: true,
});
