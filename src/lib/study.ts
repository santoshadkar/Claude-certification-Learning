import { allStudyModules } from "@content/study";
import { studyModuleSchema, type StudyModule } from "@content/schema/study";
import type { CertificationSlug } from "@content/schema/question";

export const studyModules: StudyModule[] = allStudyModules.map((m) => studyModuleSchema.parse(m));

export function getStudyModulesForCert(cert: CertificationSlug): StudyModule[] {
  return studyModules.filter((m) => m.certificationSlug === cert);
}

export function getStudyModule(cert: CertificationSlug, domain: string): StudyModule | undefined {
  return studyModules.find((m) => m.certificationSlug === cert && m.domain === domain);
}
