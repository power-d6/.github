import * as pulumi from '@pulumi/pulumi'
import * as gandi from '@pulumiverse/gandi'

export const domainOwner = {
  city: 'Malpica de Bergantiños',
  country: 'ES',
  dataObfuscated: true,
  email: 'hector.zacharias@gmail.com',
  extraParameters: {
    birth_city: '',
    birth_country: '',
    birth_date: '',
    birth_department: ''
  },
  familyName: 'Castelli Zacharias',
  givenName: 'Héctor',
  mailObfuscated: true,
  phone: '+34.677059383',
  state: 'ES-C',
  streetAddr: 'Rua Canido 57',
  type: 'person',
  zip: '15113'
}

export const domain = new gandi.domains.Domain('powerd6orgDomain', {
  admin: domainOwner,
  billing: domainOwner,
  name: 'powerd6.org',
  owner: domainOwner,
  tech: domainOwner
}, {
  protect: true,
})

export const nameservers = new gandi.domains.Nameservers('powerd6orgNameservers', {
  domain: domain.name,
  nameservers: [
    'ns-168-a.gandi.net',
    'ns-138-b.gandi.net',
    'ns-19-c.gandi.net'
  ]
}, {
  parent: domain,
})

export const CNAME_gm1domainkeyDnsRecord = new gandi.livedns.Record('CNAME-gm1domainkeyDnsRecord', {
  name: 'gm1._domainkey',
  ttl: 10800,
  type: 'CNAME',
  values: ['gm1.gandimail.net.'],
  zone: domain.id,
}, {
  parent: nameservers,
})

export const CNAME_gm2domainkeyDnsRecord = new gandi.livedns.Record('CNAME-gm2domainkeyDnsRecord', {
  name: 'gm2._domainkey',
  ttl: 10800,
  type: 'CNAME',
  values: ['gm2.gandimail.net.'],
  zone: domain.id,
}, {
  parent: nameservers,
})

export const CNAME_gm3domainkeyDnsRecord = new gandi.livedns.Record('CNAME-gm3domainkeyDnsRecord', {
  name: 'gm3._domainkey',
  ttl: 10800,
  type: 'CNAME',
  values: ['gm3.gandimail.net.'],
  zone: domain.id,
}, {
  parent: nameservers,
})

export const CNAME_webmailDnsRecord = new gandi.livedns.Record('CNAME-webmailDnsRecord', {
  name: 'webmail',
  ttl: 10800,
  type: 'CNAME',
  values: ['webmail.gandi.net.'],
  zone: domain.id,
}, {
  parent: nameservers,
})

export const MX_atDnsRecord = new gandi.livedns.Record('MX-atDnsRecord', {
  name: '@',
  ttl: 10800,
  type: 'MX',
  values: [
    '50 fb.mail.gandi.net.',
    '10 spool.mail.gandi.net.'
  ],
  zone: domain.id,
}, {
  parent: nameservers,
})

export const SRV_imaptcpDnsRecord = new gandi.livedns.Record('SRV-imaptcpDnsRecord', {
  name: '_imap._tcp',
  ttl: 10800,
  type: 'SRV',
  values: ['0 0 0 .'],
  zone: domain.id,
}, {
  parent: nameservers,
})

export const SRV_imapstcpDnsRecord = new gandi.livedns.Record('SRV-imapstcpDnsRecord', {
  name: '_imaps._tcp',
  ttl: 10800,
  type: 'SRV',
  values: ['0 1 993 mail.gandi.net.'],
  zone: domain.id,
}, {
  parent: nameservers,
})

export const SRV_pop3tcpDnsRecord = new gandi.livedns.Record('SRV-pop3tcpDnsRecord', {
  name: '_pop3._tcp',
  ttl: 10800,
  type: 'SRV',
  values: ['0 0 0 .'],
  zone: domain.id,
}, {
  parent: nameservers,
})

export const SRV_pop3stcpDnsRecord = new gandi.livedns.Record('SRV-pop3stcpDnsRecord', {
  name: '_pop3s._tcp',
  ttl: 10800,
  type: 'SRV',
  values: ['10 1 995 mail.gandi.net.'],
  zone: domain.id,
}, {
  parent: nameservers,
})

export const SRV_submissiontcpDnsRecord = new gandi.livedns.Record('SRV-submissiontcpDnsRecord', {
  name: '_submission._tcp',
  ttl: 10800,
  type: 'SRV',
  values: ['0 1 465 mail.gandi.net.'],
  zone: domain.id,
}, {
  parent: nameservers,
})

export const A_atDnsRecord = new gandi.livedns.Record('A-atDnsRecord', {
  name: '@',
  ttl: 3600,
  type: 'A',
  values: [
    '185.199.109.153',
    '185.199.111.153',
    '185.199.108.153',
    '185.199.110.153'
  ],
  zone: domain.id,
}, {
  parent: nameservers,
})

export const AAAA_atDnsRecord = new gandi.livedns.Record('AAAA-atDnsRecord', {
  name: '@',
  ttl: 3600,
  type: 'AAAA',
  values: [
    '2606:50c0:8000::153',
    '2606:50c0:8003::153',
    '2606:50c0:8002::153',
    '2606:50c0:8001::153'
  ],
  zone: domain.id,
}, {
  parent: nameservers,
})

export const output = {
  domain: domain.name,
  nameservers: nameservers.id,
  dns: {
    mailserver: [
      CNAME_gm1domainkeyDnsRecord.href,
      CNAME_gm2domainkeyDnsRecord.href,
      CNAME_gm3domainkeyDnsRecord.href,
      CNAME_webmailDnsRecord.href,
      MX_atDnsRecord.href,
      SRV_imaptcpDnsRecord.href,
      SRV_imapstcpDnsRecord.href,
      SRV_pop3tcpDnsRecord.href,
      SRV_pop3stcpDnsRecord.href,
      SRV_submissiontcpDnsRecord.href
    ],
    'github-pages': [
      A_atDnsRecord.href,
      AAAA_atDnsRecord.href
    ]
  }
}
