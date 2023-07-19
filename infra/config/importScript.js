const importScript = []

importScript.push('echo "Initializing Repositories"', `mkdir repositories`);
var repositories = [
    ".github",
    'landing-page',
    'specification',
    'tools',
    'core-rules'
];
repositories.forEach(r => {
    var cleanRepoName = r.replace(/[^a-zA-Z0-9 ]/g, '');
    importScript.push(
        `pulumi import github:index/repository:Repository ${cleanRepoName}Repository ${r} -y -o repositories/${cleanRepoName}.ts`,
        `sed -e 's/const ${cleanRepoName}Repository/export const ${cleanRepoName}Repository/' './repositories/${cleanRepoName}.ts'`,
        `echo "import {${cleanRepoName}Repository} from './repositories/${cleanRepoName}';" >> index.ts`,
        `sleep 5`,
    );
}
)


importScript.push('echo "Initializing Domains"', `mkdir domains`);
var domains = [
    'powerd6.org'
]
var defaultDnsRecords = [
    ['@', 'A'],
    ['@', 'AAAA'],
    ['@', 'MX'],
    ['_imap._tcp', 'SRV'],
    ['_imaps._tcp', 'SRV'],
    ['_pop3._tcp', 'SRV'],
    ['_pop3s._tcp', 'SRV'],
    ['_submission._tcp', 'SRV'],
    ['gm1._domainkey', 'CNAME'],
    ['gm2._domainkey', 'CNAME'],
    ['gm3._domainkey', 'CNAME'],
    ['webmail', 'CNAME'],
]
domains.forEach(d=> {
    var cleanDomainName = d.replace(/[^a-zA-Z0-9 ]/g, '');
    importScript.push(
        `mkdir domains/${cleanDomainName}`,
        `pulumi import gandi:domains/domain:Domain ${cleanDomainName}Domain ${d} -y -o domains/${cleanDomainName}/domain.ts`,
        `sed -e 's/const ${cleanDomainName}domains/export const ${cleanDomainName}domains/' './domains/${cleanDomainName}/domain.ts'`,
        `echo "import {${cleanDomainName}Domain} from './domains/${cleanDomainName}/domain.ts';" >> index.ts`,
        `sleep 5`,
    );
    importScript.push(
        `pulumi import gandi:domains/nameservers:Nameservers ${cleanDomainName}Nameservers ${d} -y -o domains/${cleanDomainName}/nameservers.ts`,
        `sed -e 's/const ${cleanDomainName}Nameservers/export const ${cleanDomainName}Nameservers/' './domains/${cleanDomainName}/nameservers.ts'`,
        `echo "import {${cleanDomainName}Nameservers} from './domains/${cleanDomainName}/nameservers.ts';" >> index.ts`,
        `sleep 5`,
    );
    importScript.push(`mkdir domains/${cleanDomainName}/dns`)
    defaultDnsRecords.forEach(([rName, rType])=>{
        var cleanRecordname = `${rType}-${rName.replace('@','at').replace(/[^a-zA-Z0-9 ]/g, '')}`;
        importScript.push(
            `pulumi import gandi:livedns/record:Record ${cleanRecordname}DnsRecord ${d}/${rName}/${rType} -y -o domains/${cleanDomainName}/dns/${cleanRecordname}.ts`,
            `sed -e 's/const ${cleanRecordname}DnsRecord/export const ${cleanRecordname}DnsRecord/' './domains/${cleanDomainName}/dns/${cleanRecordname}.ts'`,
            `echo "import {${cleanRecordname}DnsRecord} from './domains/${cleanDomainName}/dns/${cleanRecordname}.ts';" >> index.ts`,
            `sleep 5`,
        );
    })
})

console.log(importScript.join('\n'));