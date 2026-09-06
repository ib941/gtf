export const site = {
  nameAr: 'جرين ثيرم فيوتشر',
  nameEn: 'Green Therm Future',
  taglineAr: 'حلول صحية متكاملة',
  taglineEn: 'Sanitary Integrated Solutions',
  phones: ['+966573874420', '+966500485132'],
  whatsapp: '966532562682',
  emails: ['gtf@gtf-plastics.com'],
  addressAr: 'الملهم، طريق الأمير سعد بن عبد الرحمن، الرياض، المملكة العربية السعودية',
  addressEn: 'Prince Saad Ibn Abdulrahman, Malham, Riyadh, Saudi Arabia',
  domain: 'gtf-plastics.com',
  catalogPath: '/catalog/gtf-catalog.pdf',
  crNumber: '1018000478',
  vatNumber: '300308429500003',
} as const;

export const whatsappUrl = `https://wa.me/${site.whatsapp}`;

export interface Certification {
  id: string;
  nameAr: string;
  nameEn: string;
  certNo: string;
  standard: string;
  authority: string;
  validUntil: string;
}

export const certifications: Certification[] = [
  {
    id: 'saber-ppr-pipe',
    nameAr: 'شهادة مطابقة سابر — أنابيب PP-R',
    nameEn: 'SABER CoC — PPR Pipes',
    certNo: '34807-133-26-2520525',
    standard: 'Technical Regulation Part 5: Tubes and Pipes',
    authority: 'SABER / SASO',
    validUntil: '2027-07-26',
  },
  {
    id: 'saber-ppr-fitting',
    nameAr: 'شهادة مطابقة سابر — وصلات وقطع PP-R',
    nameEn: 'SABER CoC — PPR Fittings',
    certNo: '34807-133-26-2520575',
    standard: 'Technical Regulation Part 5: Tubes and Pipes',
    authority: 'SABER / SASO',
    validUntil: '2027-07-26',
  },
  {
    id: 'saber-upvc-pipe',
    nameAr: 'شهادة مطابقة سابر — أنابيب UPVC',
    nameEn: 'SABER CoC — UPVC Pipes',
    certNo: '34807-133-26-2520549',
    standard: 'Technical Regulation Part 5: Tubes and Pipes',
    authority: 'SABER / SASO',
    validUntil: '2027-07-26',
  },
  {
    id: 'saber-upvc-fitting',
    nameAr: 'شهادة مطابقة سابر — قطع وتوصيلات UPVC',
    nameEn: 'SABER CoC — UPVC Fittings',
    certNo: '34807-133-26-2520592',
    standard: 'Technical Regulation Part 4: Sanitary & Building Materials',
    authority: 'SABER / SASO',
    validUntil: '2027-07-26',
  },
  {
    id: 'iso-9001',
    nameAr: 'نظام إدارة الجودة ISO 9001:2015',
    nameEn: 'ISO 9001:2015 Quality Management',
    certNo: 'Certified',
    standard: 'International Quality Standard',
    authority: 'ISO',
    validUntil: 'Active',
  },
  {
    id: 'iso-45001',
    nameAr: 'السلامة والصحة المهنية ISO 45001:2018',
    nameEn: 'ISO 45001:2018 Health & Safety',
    certNo: 'Certified',
    standard: 'Occupational Safety Standard',
    authority: 'ISO',
    validUntil: 'Active',
  },
];