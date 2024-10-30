import { GradientText, Section } from 'astro-boilerplate-components';

const CTA = () => (
  <Section
    title={
      <>
        This is <GradientText>Astro Framework</GradientText> Portfolio
      </>
    }
  >
    <p>
      Astro boilerplate with responsive blog and portfolio template using
      TypeScript and React styled with Tailwind CSS Made with developer
      experience first: TypeScript + ESLint + Prettier + Husky + Lint-Staged +
      Commitlint + VSCode
    </p>
  </Section>
);

export { CTA };
