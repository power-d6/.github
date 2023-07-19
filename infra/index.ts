
import { githubRepository } from './repositories/github';
import { landingpageRepository } from './repositories/landingpage';
import { specificationRepository } from './repositories/specification';
import { toolsRepository } from './repositories/tools';
import { corerulesRepository } from './repositories/corerules';

export const repositories = {
    github: githubRepository.name,
    landingpage: landingpageRepository.name,
    specification: specificationRepository.name,
    tools: toolsRepository.name,
    corerules: corerulesRepository.name,
}

import { powerd6orgDomain } from './domains/powerd6org/domain';
import { powerd6orgNameservers } from './domains/powerd6org/nameservers';
import { A_atDnsRecord, AAAA_atDnsRecord } from './domains/powerd6org/dns/github_pages/github_pages';
import {
    MX_atDnsRecord,
    SRV_imaptcpDnsRecord,
    SRV_imapstcpDnsRecord,
    SRV_pop3tcpDnsRecord,
    SRV_pop3stcpDnsRecord,
    SRV_submissiontcpDnsRecord,
    CNAME_gm1domainkeyDnsRecord,
    CNAME_gm2domainkeyDnsRecord,
    CNAME_gm3domainkeyDnsRecord,
    CNAME_webmailDnsRecord,
} from './domains/powerd6org/dns/gandi_mail';

import { CNAME_wwwDnsRecord, TXT_githubpageschallengepowerd6DnsRecord } from './domains/powerd6org/dns/github_pages/powerd6_org';
import { CNAME_specificationDnsRecord, TXT_githubpageschallengepowerd6specificationDnsRecord } from './domains/powerd6org/dns/github_pages/specification_powerd6_org';

export const domains = {
    powerd6org: {
        domain: powerd6orgDomain.name,
        nameservers: powerd6orgNameservers.id,
        dns: [
            A_atDnsRecord.href,
            AAAA_atDnsRecord.href,
            MX_atDnsRecord.href,
            SRV_imaptcpDnsRecord.href,
            SRV_imapstcpDnsRecord.href,
            SRV_pop3tcpDnsRecord.href,
            SRV_pop3stcpDnsRecord.href,
            SRV_submissiontcpDnsRecord.href,
            CNAME_gm1domainkeyDnsRecord.href,
            CNAME_gm2domainkeyDnsRecord.href,
            CNAME_gm3domainkeyDnsRecord.href,
            CNAME_webmailDnsRecord.href,
            CNAME_wwwDnsRecord.href,
            TXT_githubpageschallengepowerd6DnsRecord.href,
            CNAME_specificationDnsRecord.href,
            TXT_githubpageschallengepowerd6specificationDnsRecord.href,
        ]
    }
}